export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
}

export interface EmployeeFormData {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
}

export interface FilterCriteria {
  firstName: string;
  department: string;
  role: string;
}

export interface SortOption {
  field: 'firstName' | 'lastName' | 'department' | 'email';
  direction: 'asc' | 'desc';
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}