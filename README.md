

 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Application header with search and navigation
│   ├── EmployeeGrid.tsx # Employee cards grid layout
│   ├── EmployeeCard.tsx # Individual employee card component
│   ├── EmployeeForm.tsx # Add/edit employee modal form
│   ├── SearchBar.tsx    # Search functionality component
│   ├── FilterPanel.tsx  # Advanced filtering modal
│   ├── SortControls.tsx # Sorting interface
│   └── Pagination.tsx   # Pagination controls
├── hooks/               # Custom React hooks
│   └── useEmployeeData.ts # Main data management hook
├── types/               # TypeScript type definitions
│   └── Employee.ts      # Employee and related interfaces
├── utils/               # Utility functions
│   ├── validation.ts    # Form validation utilities
│   └── employeeUtils.ts # Employee data processing utilities
├── data/                # Mock data and constants
│   └── mockEmployees.ts # Sample employee data
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

**Start the development server**
   ```bash
   npm install
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application



The built files will be available in the `dist/` directory.



### Managing Employees

1. **Adding New Employees**
   - Click the "Add Employee" button in the header
   - Fill in all required fields (First Name, Last Name, Email, Department, Role)
   - Click "Add" to save the new employee

2. **Editing Employees**
   - Click the edit icon on any employee card
   - Modify the information in the form
   - Click "Update" to save changes

3. **Deleting Employees**
   - Click the delete icon on any employee card
   - Confirm the deletion in the dialog prompt


4. **Quick Search**
   - Use the search bar in the header
   - Search by employee name or email address
   - Results update in real-time as you type

