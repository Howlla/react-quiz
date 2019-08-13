import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';
import { Fireworks } from 'fireworks/lib/react'


const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the first try.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the second try.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the third try.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the fourth try.</div>;
  
  let fxProps = {
    count: 3,
    interval: 1500,
    colors: ['#ED3837', '#F2853B', '#373435'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }
  return (
    <div className="results-container">
     <Fireworks {...fxProps} />
      <h2>Congratulations! You have won!</h2>
      {/* <div>You answered...</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries} */}
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      {<img src="https://i.imgur.com/ibj6WRr.png" alt="Packshot" height="300" opacity = "0.25" border="0"/>}

      {/* <a onClick={restartQuiz}>Restart Quiz</a> */}
      <img src="https://i.ibb.co/m0SQt1R/Refresh-Img.png" alt="Refresh" height="200" opacity="0.25"border="0"/>
      {/* <img src="https://serving.photos.photobox.com/23013902e581cda029a09c1294bf34d6410349693975825a90b621845c522a07a4d2388d.jpg" alt="Refresh" height="382" width="784"/> */}
    </div>
  );
}
Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;
