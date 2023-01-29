import React from 'react'

export const Chips = ({data, deleteHandler}) => {
  return (
    <div className='chips-container'>
       {
        data?.map((chip, index) => {
          return <div className = "chip" key={index}>
            <span>{chip}</span>
            <span onClick={()=> deleteHandler(index)}>x</span>
          </div>
        })
       }
    </div>
  )
}
