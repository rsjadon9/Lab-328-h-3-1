import { useState } from 'react';
import Learner from './components/Learner';
import learnersData from './data';
import './App.css';

function App() {
  const [learners, setLearners] = useState(learnersData);

  const deleteLearner = (indexToDelete) => {
    setLearners((prevLearners) => prevLearners.filter((_, index) => index !== indexToDelete)); // use setLearners
  };

  return (
    <>
      {learners.map((learner, index) => {
        return <Learner key={index} learner={learner} deleteLearner={() => deleteLearner(index)} />; // pass deleteLearner
      })}
    </>
  );
}

export default App;