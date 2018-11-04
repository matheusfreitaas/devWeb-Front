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
   render() {
      const { classes } = this.props;

      return(
        <div>
          <div className={classes.flexContainer}>
            <Question class='flex-item'></Question>
            <Question class='flex-item'></Question>
            <Question class='flex-item'></Question>
            <Question class='flex-item'></Question>
            <Question class='flex-item'></Question>
            <Question class='flex-item'></Question>
            <Question class='flex-item'></Question>
          </div>
          <ConfirmationButton buttonName={"Enviar avaliação"} 
          dialogContent={"Você tem certeza que deseja enviar essa avaliação?"}/>
        </div>
      );
   }
}

Avaliation.propTypes = {
   classes: PropTypes.object.isRequired
 };
 
 export default withStyles(styles)(Avaliation);