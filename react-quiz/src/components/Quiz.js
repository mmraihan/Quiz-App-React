import React from 'react'
import { Question } from './Question'


export const Quiz = () => {
  return (
    <div className='quiz'>
       
        <div className='score'>Question1/8</div>
        <Question/>
        <div className='next-button'>Next question</div>

      
    </div>

    
  )
}
