import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import 'typeface-roboto';
import Typography from 'material-ui/Typography';

import Steps from '../common/Steps';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
                 CarnetHealth Patient Registration
            </Typography>
          <Steps />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
