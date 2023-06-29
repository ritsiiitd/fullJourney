import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label className='block text-sm font-medium text-gray-600'>
          {labelName}
        </label>
      </div>
      <input 
        className='px-2 w-full py-2 focus:ring-[#4649ff] bg-gray-50 border-gray-300 text-sm rounded-lg text-gray-900'
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        id={name}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default FormField