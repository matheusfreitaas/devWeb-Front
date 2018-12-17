import React, { Component } from 'react';
import Question from './Question';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ConfirmationButton from './ConfirmationButton';

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }
})

class Avaliation extends Component{

  state = {
    questions:[],
  };

  componentDidMount() {
    fetch('http://localhost:8080/question/allQuestions')
      .then(response => response.json())
      .then(data => this.setState({ questions: data.map(question =>{ return question}) }));
  }

  handleSendAvaliation = () => {
    console.log("avaliation");
    //Colocar lógica do post para todas as questões da lista.
    //Todas as questões se atualizam automaticamente(lógica interna dos componentes AnswerBox e TextBox)
  }

  // onUpdateQuestion(newAnswer, newComent){
  //   this.setState({
  //     questions.answer: newAnswer 
  //     questions.coment: newComent
  //   })
  // }

  onChangeQuestion = i => questao => {
    const questionsBefore = this.state.questions
    questionsBefore[i] = questao
    const questionsAfter = [...questionsBefore]
    this.setState({ questions: questionsAfter })
  }
  render() {
    const { classes } = this.props;
    const {questions} = this.state;
    
    return(
      <div>
        <div className={classes.flexContainer}>
          {questions.map((question, key) =>
            <Question onChangeQuestion={this.onChangeQuestion(key)} key={key} /*updateQuestion={this.onUpdateQuestion}*/ title={question.title} class='flex-item'></Question>
          )}
        </div>
        <ConfirmationButton triggerSendAvaliation={this.handleSendAvaliation} buttonName={"Enviar Avaliação"} 
        dialogContent={"Você tem certeza que deseja enviar essa avaliação?"}/>
      </div>
    );
  }
}

Avaliation.propTypes = {
   classes: PropTypes.object.isRequired
 };
 
 export default withStyles(styles)(Avaliation);