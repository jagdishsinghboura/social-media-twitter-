import React from 'react'

export default function Card({children, noPadding}) {
  let classes ='bg-white shadow-lg rounded-md pb-2  mb-5 shadow-grey-300 p-2 '
  if(noPadding){
    classes +='p-4';
  }
  return (
    <div className={classes}>
        {children}
    </div>
  )
}
