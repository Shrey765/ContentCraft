import {useId, forwardRef} from 'react';

const Select = forwardRef(function Select({
    label,
    options = [],
    ...props
}, ref){
    const id = useId();
    return(
        <div>
            {label && <label className='label' htmlFor={id}>
                {label}
            </label>}
            <select 
                id={id}
                className="w-full bg-slate-700 text-slate-200 p-3 rounded-md border
                border-slate-600 focus:ring-sky-500 focus:border-sky-500 transition"
                ref={ref}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
})

export default Select;

{/*const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' }
];*/}