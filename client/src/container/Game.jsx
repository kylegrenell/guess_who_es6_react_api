import React from 'react';

import Question from '../components/Question';
import Peeps from '../components/Peeps';

class Game extends React.Component{

  render(){
    return (
      <div>
      <p id="game-title">¯\_(ツ)_/¯</p>
      <Question />
      <br />
      <Peeps />
      </div>
      )
  }

}

export default Game;