import {useId, forwardRef} from 'react';

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className,
    ...props
}, ref){
    const id = useId();

    return (
        <div>
            {label && <label className='label' htmlFor={id}>{label}</label>}
            <input 
                id={id}
                type={type}
                className={`w-full bg-slate-700 text-slate-200 p-3 rounded-md border border-slate-600 
                    focus:ring-sky-500 focus:border-sky-500 transition ${className}`}
                {...props}
                ref = {ref}
            />
        </div>
    )
})

export default Input;