import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { orange } from '@mui/material/colors';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 }
});
const View = () => {
 const classes = useStyles();
 const { id } = useParams();
 const [student, setStudent] = useState([]);
 useEffect(() => {
  async function getStudent() {
   try {
    const student = await axios.get(`http://localhost:5000/students/${id}`)
    
    setStudent(student.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getStudent();
 }, [id])

 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor}>
    <Typography variant="h4">Student Detail</Typography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       <TableCell align="center">{student.id}</TableCell>
       <TableCell align="center">{student.stuname}</TableCell>
       <TableCell align="center">{student.email}</TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default View