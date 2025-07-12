import React from 'react';
import { Edit, Trash2, Mail, Building, User } from 'lucide-react';
import { Employee } from '../types/Employee';

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onEdit,
  onDelete
}) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
      onDelete(employee.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {employee.firstName} {employee.lastName}
          </h3>
          <p className="text-sm text-gray-500">ID: {employee.id}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(employee)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            title="Edit Employee"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
            title="Delete Employee"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="h-4 w-4 mr-2 text-gray-400" />
          <span>{employee.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Building className="h-4 w-4 mr-2 text-gray-400" />
          <span>{employee.department}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <User className="h-4 w-4 mr-2 text-gray-400" />
          <span>{employee.role}</span>
        </div>
      </div>
    </div>
  );
};