export function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
