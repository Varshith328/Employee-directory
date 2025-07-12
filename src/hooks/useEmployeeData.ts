import { useState, useEffect, useMemo } from 'react';
import { Employee, FilterCriteria, SortOption, PaginationState } from '../types/Employee';
import { mockEmployees } from '../data/mockEmployees';
import { filterEmployees, sortEmployees, paginateEmployees, getTotalPages } from '../utils/employeeUtils';

export const useEmployeeData = () => {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
    firstName: '',
    department: '',
    role: ''
  });
  const [sortOption, setSortOption] = useState<SortOption>({
    field: 'firstName',
    direction: 'asc'
  });
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0
  });

  // Process employees: filter, sort, then paginate
  const processedEmployees = useMemo(() => {
    const filtered = filterEmployees(employees, filterCriteria, searchTerm);
    const sorted = sortEmployees(filtered, sortOption);
    return sorted;
  }, [employees, filterCriteria, searchTerm, sortOption]);

  // Update pagination when processed employees change
  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      totalItems: processedEmployees.length,
      currentPage: 1 // Reset to first page when filters change
    }));
  }, [processedEmployees]);

  // Get current page employees
  const currentPageEmployees = useMemo(() => {
    return paginateEmployees(processedEmployees, pagination.currentPage, pagination.itemsPerPage);
  }, [processedEmployees, pagination.currentPage, pagination.itemsPerPage]);

  const totalPages = getTotalPages(pagination.totalItems, pagination.itemsPerPage);

  const addEmployee = (employeeData: Omit<Employee, 'id'>) => {
    const newId = Math.max(...employees.map(e => e.id)) + 1;
    const newEmployee = { ...employeeData, id: newId };
    setEmployees(prev => [...prev, newEmployee]);
  };

  const updateEmployee = (id: number, employeeData: Omit<Employee, 'id'>) => {
    setEmployees(prev => 
      prev.map(emp => emp.id === id ? { ...employeeData, id } : emp)
    );
  };

  const deleteEmployee = (id: number) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const getEmployeeById = (id: number): Employee | undefined => {
    return employees.find(emp => emp.id === id);
  };

  return {
    employees: currentPageEmployees,
    allEmployees: employees,
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
  };
};