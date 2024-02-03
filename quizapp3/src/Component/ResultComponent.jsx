import React from "react";
import { useLocation } from "react-router-dom";
import "../css/ResultComponent.css"
import { Link } from "react-router-dom";

export default function ResultComponent(){
  const location = useLocation();
  return(
    <div className="result">
      <h1>Result</h1>
      <div className="score-section">
        <h3>You need more practice!</h3>
        <h1 className="score">Your score is {location.state.score}</h1>
        <div className="flex">
          <div className="details">
            <h6>Totol number of quesions</h6>
            <h6>Number of attempted questions</h6>
            <h6>Number of correct answers</h6>
            <h6>Number of wrong answers</h6>
          </div>
          <div className="number">
            <h6>{location.state.totalQuestions}</h6>
            <h6>{location.state.answeredQuestions}</h6>
            <h6>{location.state.correctAnswer}</h6>
            <h6>{location.state.wrongAnswer}</h6>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/play-quiz"><button className="play">Play Again</button></Link>
        <Link to="/"><button className="home-result">Back to home</button></Link>
      </div>
    </div>
  )
}