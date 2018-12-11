import React, {Component} from 'react';
import axios from 'axios';
import QuestionTable from './QuestionTable';

class Evaluation extends Component{
   constructor(props){
      super(props);

      this.state ={
         questions: [],
         isLoading: false,
         error: null,
      }
   }

   componentDidMount(){
      this.fetchQuestions();
   }

   fetchQuestions = () => {
      this.setState({isLoading: true});
      axios('http://localhost:8080/question/allQuestions')
      .then(result => this.setQuestions(result.data))
      .catch(error => this.setState({error}));
   }

   setQuestions = (data) => {
      this.setState({questions: data.map(question => {return question})});
      this.setState({isLoading: false});
   }

   render(){
      const {
         questions, 
         isLoading,
      } = this.state;
      return(
         <div className='page'>
            {isLoading
            ? 'Loading...'
            : <QuestionTable
            questionList={questions}
            >
            Enviar
            </QuestionTable>
            }
         </div>
      );
   }
}

export default Evaluation;