export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateEmployee = (employee: {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!employee.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!employee.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!employee.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(employee.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!employee.department.trim()) {
    errors.department = 'Department is required';
  }

  if (!employee.role.trim()) {
    errors.role = 'Role is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};