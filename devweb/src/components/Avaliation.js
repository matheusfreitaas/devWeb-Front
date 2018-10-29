import React, { Component } from 'react';
import Question from './Question';
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
   container: {
     display: 'flex',   
     flexWrap: 'wrap',
   },
   button: {
      margin: theme.spacing.unit,
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
         <avaliation className={classes.container}>
            <div>
               <ul>
                  <li><Question></Question></li>
                  <li><Question></Question></li>
                  <li><Question></Question></li>
               </ul>
               <MuiThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" className={classes.button}>
                     ENVIAR AVALIAÇÃO
                  </Button>
               </MuiThemeProvider>
            </div>
         </avaliation>
      );
   }
}

Avaliation.propTypes = {
   classes: PropTypes.object.isRequired
 };
 
 export default withStyles(styles)(Avaliation);