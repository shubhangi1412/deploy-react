import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = theme => ({
  paper: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  }
})

class Content extends React.Component {
    state = {
        table1 : [
            {id : 1, name: 'Candidates'},
            {id : 2, name: 'Work Pass check'},
            {id : 3, name: 'Organisations'},
            {id : 4, name: 'Payments'}
        ],
        table2 : [
            {id : 1, name: 'British Airways'},
            {id : 2, name: 'AAA'}
        ],
        table3 : [
            {id : 1, name: 'Permanent- Ops Cargo'},
            {id : 2, name: 'Permanent- Cargo'}
          
        ],
        showing: false
    }

    renderTableData() {
        return this.state.table1.map((item, index) => {
           const { id, name } = item 
           return (
              <tr key={id}>
                 <td>{name}</td>
              </tr>
           )
        })
     }
   
     renderTableData2() {
        return this.state.table2.map((item, index) => {
           const { id, name } = item 
           return (
              <tr key={id}>
               <td onClick={()=>this.showTab(index)}><Checkbox color="primary" />{name}</td>
              </tr>
           )
        })
     }
     renderTableData3() {
        return this.state.table3.map((item, index) => {
           const { id, name } = item 
           return (
              <tr key={id}>
                 <td><Checkbox color="primary" />{name}</td>
              </tr>
           )
        })
     }
   
    showTab=(tabIndex)=>{
        console.log(tabIndex)
      if(this.state.table2[tabIndex].name==='British Airways'){
        //  alert('ddmc');
         this.setState({showing: true})
      }
      else{
        this.setState({showing: false})
      }
    }  
  render() {
    const {classes } = this.props;
   function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    return (
      <div>
        <div className={classes.root}>
        <Grid container>
        <Grid item md={3}>
        <div className='content'><Button variant="contained" color="primary">Add Candidates</Button>
          <table id='table1' className="table-fill">
               <tbody className="table-hover">
               {this.renderTableData()}
               </tbody>
            </table>
            </div>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="flex-start" item md={9} className="main">
       
        <Grid item md={12}>
     
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
            </Grid>
     <Grid item md={4}>
      
            <table id='table2' className="table-fill">
               <tbody className="table-hover">
               {this.renderTableData2()}
               </tbody>
            </table>
            </Grid>
            <Grid item md={4}>
            <table id='table3' className="table-fill">
               <tbody className="table-hover">
               {this.state.showing ?
               this.renderTableData3() : null} 
               </tbody>
            </table>
            </Grid>
            <Grid item md={4}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
            
        </Grid>
        </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(Content)