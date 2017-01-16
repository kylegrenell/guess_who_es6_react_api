import React from 'react';

class Question extends React.Component{

  QuestionDropdown(){
    const options = this.props.questions.map(function(question, index){
      return <option key={index} value={index}>{question}</option>
    });
    return options;  
  }

  handleSelect(e) {
    const index = e.target.value;
    this.props.selectedQuestion(index);
  }

  render(){
    return (
      <div>
      <select className="question-dropdown" onChange={this.handleSelect}>
      <option selected="true" disabled="disabled">Select a Question</option>
      <option onClick={this.handleSelect}> Is it male or female? </option>
      <option onClick={this.handleSelect}> Are they wearing glasses? </option>
      <option onClick={this.handleSelect}> Do they have dark hair? </option>
      <option onClick={this.handleSelect}> Are they wearing a hat? </option>
      </select>
      </div>
      )
  }
}

export default Question;