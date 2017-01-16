import React from 'react';

import Peeps from '../components/Peeps';
import ImageList from '../components/ImageList';

class PlayGame extends React.Component({

  getInitialState(){
    return { 
      questions: [
      "Is it male or female?",
      "Are they wearing glasses?",
      "Do they have dark hair?",
      "Are they wearing a hat?"
      ], 
      correct: null,
      selectedQuestion: null,
      questionAnswer: null,
      guessId: null,
      guessAnswer: null
    }
  }

  componentDidUpdate() {
    if (this.state.correct === null) {
     let random = this.props.peeps[Math.floor(Math.random() * this.props.peeps.length)];
    this.setState({correct: random})
    }
  }

  setSelectedQuestion(index) {
      this.setState({ selectedQuestion: index }, function respondToQuestion() {        
        let index = this.state.selectedQuestion;
        let response = this.state.correct.question[index];
        this.setState({questionAnswer: response});    
      }.bind(this)); 
  }

  checkGuessIsCorrect(guessId) {
    this.setState({guessId: guessId}, function respondToGuess(){
      if (guessId == this.state.correct.id) {
        this.setState({guessAnswer: "That.. is.. correct"})
      } else {
        this.setState({guessAnswer: "Nahhhh mate. Wrong. Just wrong."})
      }
    }.bind(this));
  }

  render(){
    return(
      <div>  
        <div className='images'>
          <ImageList images={this.props.images}></ImageList>
        </div>
        <div className='all-dropdown-info'>
          <div className="questions-div">
            <h2 id='question-title'>Ask A Question</h2>
            <QuestionSelect images={this.props.images} questions={this.state.questions} selectedQuestion={this.setSelectedQuestion}/>
            <QuestionAnswer answer={this.state.questionAnswer}/>
          </div>
          <div className="guess-div">
            <h2 id='guess-title'>Take A Guess</h2>
            <GuessSelect images={this.props.images} makeGuess={this.checkGuessIsCorrect} />
            <GuessAnswer response={this.state.guessAnswer}/>
          </div>
        </div>
      </div>
    )
  }

})

export default PlayGame;