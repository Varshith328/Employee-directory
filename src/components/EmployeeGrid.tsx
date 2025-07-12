import React from 'react';
import { Employee } from '../types/Employee';
import { EmployeeCard } from './EmployeeCard';

interface EmployeeGridProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

export const EmployeeGrid: React.FC<EmployeeGridProps> = ({
  employees,
  onEdit,
  onDelete
}) => {
  if (employees.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No employees found</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};