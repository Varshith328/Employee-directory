import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SortOption } from '../types/Employee';

interface SortControlsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export const SortControls: React.FC<SortControlsProps> = ({ sortOption, onSortChange }) => {
  const handleSortChange = (field: SortOption['field']) => {
    if (sortOption.field === field) {
      // Toggle direction if same field
      onSortChange({
        field,
        direction: sortOption.direction === 'asc' ? 'desc' : 'asc'
      });
    } else {
      // Set new field with ascending direction
      onSortChange({
        field,
        direction: 'asc'
      });
    }
  };

  const getSortIcon = (field: SortOption['field']) => {
    if (sortOption.field !== field) return null;
    return sortOption.direction === 'asc' ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  const sortFields = [
    { field: 'firstName' as const, label: 'First Name' },
    { field: 'lastName' as const, label: 'Last Name' },
    { field: 'department' as const, label: 'Department' },
    { field: 'email' as const, label: 'Email' }
  ];

  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm font-medium text-gray-700 mr-2">Sort by:</span>
      {sortFields.map(({ field, label }) => (
        <button
          key={field}
          onClick={() => handleSortChange(field)}
          className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            sortOption.field === field
              ? 'bg-blue-100 text-blue-700 border border-blue-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
          }`}
        >
          <span>{label}</span>
          {getSortIcon(field)}
        </button>
      ))}
    </div>
  );
};