import React, {  useState} from "react"
import './App.css';
import { Question } from './components/Questions/Question';
import { LandingPage } from './components/Questions/LandingPage';
import { fetchAllQuestions, useQuestionaire } from './hooks/Questions';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const {questions} = useQuestionaire(startQuiz);
  console.log('questions', questions);
  const handleStart = () => {
    // get all questions
    setStartQuiz(true)
  }

  
  return (
    <>
    {questions.length <= 0 ? <LandingPage onStart={handleStart}/> : <Question questionsList={questions}/>}

    </>
  );
}

export default App;
