import React from 'react';
import ReactDOM from 'react-dom';

import Game from './container/Game';

window.onload = function(){
  ReactDOM.render(
    <Game />,
    document.getElementById('app')
  );
}
