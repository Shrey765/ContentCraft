import {useId, forwardRef} from 'react';

const TextArea = forwardRef(function TextArea({
    label,
    className = '',
    ...props
}, ref){
    const id = useId();
    return(
        <div>
            {label && <label className="label" htmlFor={id}>
                {label}
            </label>}
            <textarea id={id} className={`w-full bg-slate-700
            text-slate-200 p-3 rounded-md border border-slate-600 
            focus:ring-sky-500 focus:border-sky-500 transition
            ${className}`}
            {...props}
            ref={ref}></textarea>
        </div>
    )
})

export default TextArea;