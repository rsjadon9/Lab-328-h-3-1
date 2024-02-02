import React from 'react';
import Score from './Score';





const Learner = ({ learner, deleteLearner }) => {
    return (
        <div>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            {learner.scores.map((score, index) => (
                <Score key={index} score={score} />
            ))}
            <button onClick={deleteLearner}>Delete Learner</button>
        </div>
    );
};


export default Learner;