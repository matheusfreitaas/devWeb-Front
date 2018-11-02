import React, { Component } from 'react';
import PropTypes from "prop-types";
import {withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = theme => ({
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

class ConfirmationButton extends Component{

   constructor(props){
      super(props);
      
      this.state = {
         dialog:false,
      }
   }
  
    handleOpenDialog = () => {
      this.setState({ dialog: true });
    };
  
    handleCloseDialog = () => {
      this.setState({ dialog: false });
    };

   render(){
      const {classes} = this.props;

      return(
         <div>
            <MuiThemeProvider theme={theme}>
               <Button variant="contained" color="primary" className={classes.button} 
               onClick={this.handleOpenDialog}>
               {this.props.buttonName}
               </Button>
            </MuiThemeProvider>
            <Dialog open={this.state.dialog} onClose={this.handleClose} 
            aria-describedby="dialog-description">
               <DialogContent>
                  <DialogContentText id="dialog-description">
                     {this.props.dialogContent}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={this.handleCloseDialog} color="primary">
                  Não
                  </Button>
                  <Button onClick={this.handleCloseDialog} color="primary" autoFocus>
                  Sim
                  </Button>
               </DialogActions>
            </Dialog>
         </div>
      )
   }   
   
}

ConfirmationButton.propTypes = {
   classes: PropTypes.object.isRequired
 };
 
 export default withStyles(styles)(ConfirmationButton);