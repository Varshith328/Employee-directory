import { Employee, FilterCriteria, SortOption } from '../types/Employee';

export const filterEmployees = (employees: Employee[], criteria: FilterCriteria, searchTerm: string): Employee[] => {
  return employees.filter(employee => {
    // Search filter
    const matchesSearch = searchTerm === '' || 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());

    // Criteria filters
    const matchesFirstName = criteria.firstName === '' || 
      employee.firstName.toLowerCase().includes(criteria.firstName.toLowerCase());
    
    const matchesDepartment = criteria.department === '' || 
      employee.department === criteria.department;
    
    const matchesRole = criteria.role === '' || 
      employee.role === criteria.role;

    return matchesSearch && matchesFirstName && matchesDepartment && matchesRole;
  });
};

export const sortEmployees = (employees: Employee[], sortOption: SortOption): Employee[] => {
  return [...employees].sort((a, b) => {
    const aValue = a[sortOption.field].toLowerCase();
    const bValue = b[sortOption.field].toLowerCase();
    
    if (sortOption.direction === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
};

export const paginateEmployees = (employees: Employee[], currentPage: number, itemsPerPage: number): Employee[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return employees.slice(startIndex, endIndex);
};

export const getTotalPages = (totalItems: number, itemsPerPage: number): number => {
  return Math.ceil(totalItems / itemsPerPage);
};