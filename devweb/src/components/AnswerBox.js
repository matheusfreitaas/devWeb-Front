import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const styles = theme => ({
   textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
 });

const answer = [
   {
     value: 'Péssimo',
     label: 'Péssimo',
   },
   {
     value: 'Ruim',
     label: 'Ruim',
   },
   {
     value: 'Bom',
     label: 'Bom',
   },
   {
     value: 'Ótimo',
     label: 'Ótimo',
   }, 
   {
    value: 'Excelente',
    label: 'Excelente',
  },
 ];
 
class AnswerBox extends React.Component{
   state = {
      answer: 'Bom'
    };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };  

   render() {
      const {classes} = this.props;

      return(
         <form noValidate autoComplete="off"> 
            <TextField
               id="answer-id"
               select
               label="Resposta"
               className={classes.textField}
               value={this.state.answer}
               onChange={this.handleChange('answer')}
               SelectProps={{
                  native: true,
                  MenuProps: {
                  className: classes.menu,
                  },
               }}
               helperText="Escolha uma resposta para a pergunta."
               margin="normal"
               variant="outlined"
            >
            {answer.map(option => (
               <option key={option.value} value={option.value}>
               {option.label}
               </option>
            ))}
            </TextField>
         </form>
      );
   };

}

AnswerBox.propTypes = {
   classes: PropTypes.object.isRequired
 };

export default withStyles(styles)(AnswerBox);