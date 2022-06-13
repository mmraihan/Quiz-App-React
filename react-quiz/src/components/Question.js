import React from 'react'
import { Answer } from './Answer'

export const Question = () => {
  return (
    <div>
    <div className='question'>Text of our questionQuestion</div>
      <div className='answers'>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>

   </div>
    
  )
}
