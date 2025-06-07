export const Select = ({ children, ...props }) => (
  <select {...props} className='border p-2 rounded w-full'>
    {children}
  </select>
);

export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
