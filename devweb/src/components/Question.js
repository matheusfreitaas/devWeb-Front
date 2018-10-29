import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import '../App.css';

const styles = theme => ({
   textField: {
     marginLeft: theme.spacing.unit,
     marginRight: theme.spacing.unit,
   },
   divider: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    container: {
       borderStyle: 'solid',
       margin: theme.spacing.unit,
    }
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

class Question extends React.Component {
  state = {
    coment: '',
    answer: 'Bom'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
         <h1 className={classes.divider}>Pergunta</h1>
         <hr/>
         <form noValidate autoComplete="off">
            <TextField
               id="coment-id"
               label="Comentário"
               multiline
               rowsMax="10"
               value={this.state.coment}
               onChange={this.handleChange('coment')}
               className={classes.textField}
               margin="normal"
               helperText="Você pode escrever um comentário sobre a pergunta."
               variant="outlined"
         />
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
      </div>
      
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Question);
