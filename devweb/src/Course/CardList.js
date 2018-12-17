import React, {Component} from 'react';
import axios from 'axios';
import CourseCard from './CourseCard'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import './CardList.css';

const styles = theme => ({
   flexContainer: {
     display: 'flex',
     justifyContent: 'space-around',
     flexWrap: 'wrap',
   }
 });
 
class CardList extends Component{
   constructor(props){
      super(props);

      this.state = {
         courses: [],
         isLoading: false,
      }
   }
   componentDidMount(){
      this.fetchCourses();
   }
   
   fetchCourses = () => {
      this.setState({isLoading: true});
      axios('http://localhost:8080/course/allCourses')
      .then(result => this.setCourses(result.data))
      .catch(error => this.setState({error}));
   }

   setCourses = (data) => {
      this.setState({courses: data.map(course => {return course})});
      this.setState({isLoading: false});
   }

   render() {
      const classes = this.props;
      return(
         <div className={classes.flexContainer}>
            {this.state.courses.map( course => {
               return(
                  <CourseCard course={course}></CourseCard>
               );
            })}
         </div>
      );
   }    
}


CardList.propTypes = {
   classes: PropTypes.object.isRequired
 }
 
 export default withStyles(styles)(CardList);
