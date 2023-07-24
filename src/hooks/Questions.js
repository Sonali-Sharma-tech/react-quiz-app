import { useEffect, useState } from "react";


export const useQuestionaire = (startQuiz) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (startQuiz) {
      fetchAllQuestions();
    }
  }, [startQuiz])

  // simulating a rest api call
  const fetchAllQuestions = async () => {
    fetch('questions.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setQuestions(data.questions);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  };


  return { questions }
}

