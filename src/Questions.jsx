import React from 'react'
import SingleQuestions from './SingleQuestions'


// 3. activeID, toggleQuestion
const Questions = ({questions, activeID, toggleQuestion}) => {
  return (
   <section className='container'>
    <h1>Questions</h1>
    {questions.map((question)=>{
      return (
        <SingleQuestions
          key={question.id}
          {...question}

          // 1.
          activeID={activeID}
          // 2.
          toggleQuestion={toggleQuestion}
        />
      )
    


    })}

   </section>
  )
}

export default Questions