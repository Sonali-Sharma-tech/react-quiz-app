import React, {  useState} from "react"
import { Question } from '../Quiz/Questions/Question';
import { LandingPage } from '../Quiz/Questions/LandingPage';
import { useQuestionaire } from '../../hooks/Questions';
import { FinalScore } from "../Quiz/Questions/FinalScore";

function Quiz() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {questions} = useQuestionaire(startQuiz);
  console.log('questions', questions);
  const handleStart = () => {
    // get all questions
    setStartQuiz(true)
  }
  const handleShowResults = () => {
    // get all questions
    setShowResults(true)
  }
  

  
  return (
    <>
    {questions.length <= 0 ? <LandingPage onStart={handleStart}/> : 
    (showResults ? <FinalScore/> : <Question questionsList={questions} handleShowResults={handleShowResults}/>)}
    </>
  );
}

export default Quiz;
