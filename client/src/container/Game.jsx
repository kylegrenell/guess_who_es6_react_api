import React from 'react';
// import Grid from './../components/Grid';

class Game extends React.Component{



  render(){
    return (
      <div>
      <p>Guess Who</p>
      <table>
      <tbody align="center">
      <tr>
          <th><img src="images/alex.png" alt="alex" height="200px"></img></th>
          <th><img src="images/alfred.jpg" alt="alfred" height="200px"></img></th>
          <th><img src="images/anita.jpg" alt="anita" height="200px"></img></th>
          <th><img src="images/anne.png" alt="anne" height="200px"></img></th>
          <th><img src="images/bernard.png" alt="bernard" height="200px"></img></th>
          <th><img src="images/bill.jpg" alt="bill" height="200px"></img></th>    
      </tr>
      <tr>
          <th><img src="images/charles.jpg" alt="charles" height="200px"></img></th>
          <th><img src="images/claire.png" alt="claire" height="200px"></img></th>
          <th><img src="images/david.png" alt="david" height="200px"></img></th>
          <th><img src="images/Frans.png" alt="Frans" height="200px"></img></th>
          <th><img src="images/geroge.jpg" alt="geroge" height="200px"></img></th>
          <th><img src="images/herman.png" alt="herman" height="200px"></img></th>
      </tr>
      <tr>
          <th><img src="images/maria.png" alt="maria" height="200px"></img></th>
          <th><img src="images/max.png" alt="max" height="200px"></img></th>
          <th><img src="images/paul.png" alt="paul" height="200px"></img></th>
          <th><img src="images/richard.jpg" alt="richard" height="200px"></img></th>
          <th><img src="images/susan.png" alt="susan" height="200px"></img></th>
          <th><img src="images/tom.png" alt="tom" height="200px"></img></th>
      </tr>
      </tbody>
      </table>
      </div>

      )
  }

}

export default Game;