import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextBoxInput from "./TextBoxInput";
import AnswerBox from "./AnswerBox";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
   card: {
      minWidth: 275,
      margin: theme.spacing.unit,
    },
    title: {
      fontSize: 14,
    },
 });

class Question extends React.Component {
   state = {
      title: 'Titulo', 
   };

   render() {
      const { classes } = this.props;
      
      return (
         <Card className={classes.card}>
            <CardContent>
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {this.state.title}
               </Typography>
               <AnswerBox></AnswerBox>
               <TextBoxInput></TextBoxInput>
            </CardContent>
         </Card>
      );
   }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Question);
