var React = require('react');
var ReactDOM = require('react-dom');

import Game from './container/Game';

window.onload = function(){
  ReactDOM.render(
    <Game />,
    document.getElementById('app')
  );
}
