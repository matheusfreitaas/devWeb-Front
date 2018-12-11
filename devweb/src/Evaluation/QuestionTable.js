import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const CustomTableCell = withStyles(theme => ({
   head: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white,
   },
   body: {
     fontSize: 14,
   },
 }))(TableCell);

 const styles = theme => ({
   root: {
     width: '100%',
     marginTop: theme.spacing.unit * 3,
     overflowX: 'auto',
   },
   table: {
     minWidth: 700,
   },
   row: {
     '&:nth-of-type(odd)': {
       backgroundColor: theme.palette.background.default,
     },
   },
 });

 const answer = [
   {
     value: "Péssimo",
     label: "Péssimo"
   },
   {
     value: "Ruim",
     label: "Ruim"
   },
   {
     value: "Bom",
     label: "Bom"
   },
   {
     value: "Ótimo",
     label: "Ótimo"
   },
   {
      value: "Excelente",
      label: "Excelente"
    }
 ];

 const handleChange = (name) => (event) => {
   this.setState({
     [name]: event.target.value
   });
 };


const QuestionTable  = ({questionList, children, classes}) => {
   return(
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Pergunta</CustomTableCell>
            <CustomTableCell align="right">Comentário</CustomTableCell>
            <CustomTableCell align="right">Nota</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questionList.map((question, key) => {
             return(
              <TableRow className={classes.row} key={key}>
                <CustomTableCell component="th" scope="row">
                  {question.title}
                </CustomTableCell>
                <CustomTableCell align="right">
                  <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                           id="standard-multiline-static"
                           label="Escreva um comentário"
                           multiline
                           rows="4"
                           defaultValue= ""
                           className={classes.textField}
                           margin="normal"
                        />
                  </form>
                </CustomTableCell>
                <CustomTableCell align="right">
                  <form className={classes.container} noValidate autoComplete="off">
                     <TextField
                        id="standard-select-currency"
                        select
                        label="Resposta"
                        className={classes.textField}
                        value={question.answer}
                        onChange={handleChange("answer")}
                        SelectProps={{
                           MenuProps: {
                           className: classes.menu
                           }
                        }}
                        helperText="Escolha uma opção."
                        margin="normal"
                     >
                        {answer.map(option => (
                           <MenuItem key={option.value} value={option.value}>
                              {option.label}
                           </MenuItem>
                        ))}
                     </TextField>
                  </form>
                </CustomTableCell>
              </TableRow>
             );
          })}
        </TableBody>
      </Table>
    </Paper>
   );
}


QuestionTable.propTypes = {
   classes: PropTypes.object.isRequired,
 };
 
 export default withStyles(styles)(QuestionTable);