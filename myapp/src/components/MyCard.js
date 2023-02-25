import React from 'react'
import "./MyCard.css"

export default function MyCard(props) {
  return (
    <div className='mycard'>

      <p className='para' id='para1'>{props.para1}</p>
      <p className='para'>{props.para2}</p>
      <p className='para'>{props.para3}</p>
      <p className='para'>{props.para4}</p>
      <p className='para'>{props.para5}</p>
      <p className='para'>{props.para6}</p>
      <p className='para'>{props.para7}</p>
      <p className='para'>{props.para8}</p>
      <p className='para'>{props.para9}</p>
      <p className='para'>{props.para10}</p>


    </div>
  )
}
