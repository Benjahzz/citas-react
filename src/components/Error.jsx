import React from 'react'

const Error = ({children}) => {
  return (
    <div className="text-center bg-red-400 p-2
         text-white rounded-md mb-4 uppercase font-semibold">
            {children}
    </div>
  )
}

export default Error