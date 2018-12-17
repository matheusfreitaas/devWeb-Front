import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 350,
    marginRight: '10px',
    marginTop: '20px'
  },
  media: {
    height: 250,
    width : 350
  },
};

const CourseCard = ({classes, course}) => {
   return(
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {course.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {`Turma: ${course.class}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Avalie</Button>
        </CardActions>
      </Card>
   );
}

CourseCard.propTypes = {
   classes: PropTypes.object.isRequired,
 };
 
 export default withStyles(styles)(CourseCard);