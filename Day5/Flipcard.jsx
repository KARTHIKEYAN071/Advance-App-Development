import React, { useState } from 'react';
import './FlipCard.css';
import Login2 from '../Login/Login2';
import SignUp from '../SignUp';

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

   
    const handleSignUpClick = () => {
      setIsFlipped(true);
    };
    const handleFlipBackToLogin = () => {
        setIsFlipped(false);
      };
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} >
      
      <div className="flip-card-inner">
        <div className="flip-card-front" >
           <Login2 isFlipped={isFlipped} onSignUpClick={handleSignUpClick}/>
          
        </div>
        <div className="flip-card-back">
            <SignUp isFlipped={isFlipped} onFlipBackToLogin={handleFlipBackToLogin}/>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
