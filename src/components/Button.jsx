
export default function Button({
    children,
    className='',
    bgColor='bg-red-600',
    textColor='text-white',
    ...props
}){
    return (
        <div>
            <button 
            {...props}
            className={`font-bold rounded-lg hover:${bgColor} flex items-center justify-center space-x-2 ${className} ${bgColor} ${textColor}`}
            >{children}</button>
        </div>
    )
}