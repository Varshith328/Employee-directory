import React from 'react';
import { Users, Plus, Filter } from 'lucide-react';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onAddEmployee: () => void;
  onToggleFilter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  onAddEmployee,
  onToggleFilter
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Employee Directory</h1>
          </div>

          <div className="flex items-center space-x-4">
            <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
            
            <button
              onClick={onToggleFilter}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>

            <button
              onClick={onAddEmployee}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};