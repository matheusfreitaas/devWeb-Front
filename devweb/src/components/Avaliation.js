import React, { Component } from 'react';
import Question from './Question';
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
   button: {
      margin: '2rem',
      primary: green,
    },
})

const theme = createMuiTheme({
   palette: {
     primary: green,
   },
   typography: {
     useNextVariants: true,
   },
 });
 

class Avaliation extends Component{
   constructor() {
      super();
   }

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
          <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" className={classes.button}>
              Enviar avaliação
            </Button>
          </MuiThemeProvider>
        </div>
      );
   }
}

Avaliation.propTypes = {
   classes: PropTypes.object.isRequired
 };
 
 export default withStyles(styles)(Avaliation);