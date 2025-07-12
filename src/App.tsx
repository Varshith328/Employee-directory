import React, { useState } from 'react';
import { Employee } from './types/Employee';
import { useEmployeeData } from './hooks/useEmployeeData';
import { Header } from './components/Header';
import { EmployeeGrid } from './components/EmployeeGrid';
import { EmployeeForm } from './components/EmployeeForm';
import { FilterPanel } from './components/FilterPanel';
import { SortControls } from './components/SortControls';
import { Pagination } from './components/Pagination';

function App() {
  const {
    employees,
    searchTerm,
    setSearchTerm,
    filterCriteria,
    setFilterCriteria,
    sortOption,
    setSortOption,
    pagination,
    setPagination,
    totalPages,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
  } = useEmployeeData();

  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | undefined>();

  const handleAddEmployee = () => {
    setEditingEmployee(undefined);
    setShowForm(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleSaveEmployee = (employeeData: Omit<Employee, 'id'>) => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, employeeData);
    } else {
      addEmployee(employeeData);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingEmployee(undefined);
  };

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setPagination(prev => ({ ...prev, itemsPerPage, currentPage: 1 }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddEmployee={handleAddEmployee}
        onToggleFilter={() => setShowFilter(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <SortControls
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <EmployeeGrid
              employees={employees}
              onEdit={handleEditEmployee}
              onDelete={deleteEmployee}
            />
          </div>

          {totalPages > 0 && (
            <Pagination
              pagination={pagination}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          )}
        </div>
      </main>

      <EmployeeForm
        isOpen={showForm}
        employee={editingEmployee}
        onClose={handleCloseForm}
        onSave={handleSaveEmployee}
      />

      <FilterPanel
        isOpen={showFilter}
        onClose={() => setShowFilter(false)}
        filterCriteria={filterCriteria}
        onFilterChange={setFilterCriteria}
      />
    </div>
  );
}

export default App;