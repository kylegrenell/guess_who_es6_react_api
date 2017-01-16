import React from 'react';

class Peeps extends React.Component{

  handleClick(){
    const setDiscarded = !this.state.discarded;
    this.setState({discarded: setDiscarded});
  }


  render(){
    return (
      <div>
      <table>
      <tbody>
      <tr>
      <th><img id="character" src="images/alex.png" alt="alex" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/alfred.png" alt="alfred" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/anita.png" alt="anita" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/anne.png" alt="anne" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/bernard.png" alt="bernard" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/bill.png" alt="bill" height="200px" onClick={this.handleClick}></img></th>    
      </tr>
      <tr>
      <th><img src="images/claire.png" alt="claire" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/david.png" alt="david" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/eric.png" alt="eric" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/george.png" alt="geroge" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/herman.png" alt="herman" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/maria.png" alt="maria" height="200px" onClick={this.handleClick}></img></th>
      </tr>
      <tr>
      <th><img src="images/max.png" alt="max" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/paul.png" alt="paul" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/philip.png" alt="philip" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/richard.png" alt="richard" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/susan.png" alt="susan" height="200px" onClick={this.handleClick}></img></th>
      <th><img src="images/tom.png" alt="tom" height="200px" onClick={this.handleClick}></img></th>
      </tr>
      </tbody>
      </table>
      </div>

      )
  }

}

export default Peeps;