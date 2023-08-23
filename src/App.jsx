import { useState } from 'react';
import data from './data'
import Questions from './Questions';


const App = () => {

const [questions, setQuestions] = useState(data)

// 1.
const [activeID, setActiveID] = useState(null)

// 2.
const toggleQuestion = (id) =>{

// 5.  
const newActiveID = id === activeID ? null : id 
// 6.
setActiveID(newActiveID)

}


  return (
    <main>
   <Questions questions={questions}
  
  // 3.
   activeID={activeID}
  // 4.
   toggleQuestion={toggleQuestion}
   
   />

    </main>


  )
};
export default App;
