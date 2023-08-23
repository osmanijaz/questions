import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai' 


// 1.  id, activeID, toggleQuestion
const SingleQuestions = ({id, title, info, activeID, toggleQuestion}) => {

  // const [showInfo, setShowInfo] = useState(false)
  
// 2.
  const isActive = id === activeID



  return (
    <article className="question">
      <header>
        <h5>{title}</h5>

        {/* 5. toggleQuestion(id) */}
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {/* 3. isActive */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* 4. isActive */}
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestions