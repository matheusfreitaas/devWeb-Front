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

class TextBoxInput extends React.Component{
   state = {
      text: ''
   };

   handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

   render(){
      const {classes} = this.props;

      return(
         <form noValidate autoComplete="off">
            <TextField
               id="coment-id"
               label="Comentário"
               multiline
               rowsMax="5"
               value={this.state.coment}
               onChange={this.handleChange('coment')}
               className={classes.textField}
               margin="normal"
               helperText="Você pode escrever um comentário sobre a pergunta."
               variant="outlined"
            />
         </form>
      )
   };
}

TextBoxInput.propTypes = {
   classes: PropTypes.object.isRequired
 };

export default withStyles(styles)(TextBoxInput);