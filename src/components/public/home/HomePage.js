import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import Slideshow from './Slideshow';
import HomeCard from './HomeCard';
import TablesMedical from './TablesMedical';

const styles = {
    paper: {
        padding: 0,
        marginTop: 10,
        marginBottom: 5,
    }
}
//<Slideshow />
class HomePage extends React.Component {
    render() {
        return (
        <Fragment>
            <CssBaseline />
            <Grid container spacing={24}>
            <Grid item xs={8}>
              <Paper className={styles.paper}>
              <Slideshow />
              </Paper>
            </Grid>
            <Grid item xs>
            <HomeCard />
            </Grid>
           </Grid>
           <Grid container spacing={24}>
            <Grid item xs={8}>
              <HomeCard />
            </Grid>
            <Grid item xs>
            <HomeCard />
            </Grid>
           </Grid>
          </Fragment>
        );
    }
}

export default HomePage;
