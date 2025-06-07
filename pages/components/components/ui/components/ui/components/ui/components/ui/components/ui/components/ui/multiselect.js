export const MultiSelect = ({ options, selected, onChange }) => (
  <div>
    {options.map(opt => (
      <div key={opt}>
        <input
          type='checkbox'
          checked={selected.includes(opt)}
          onChange={() =>
            selected.includes(opt)
              ? onChange(selected.filter(item => item !== opt))
              : onChange([...selected, opt])
          }
        />{" "}
        {opt}
      </div>
    ))}
  </div>
);
