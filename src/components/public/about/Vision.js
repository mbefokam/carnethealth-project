import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import 'typeface-roboto'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="display2" gutterBottom align="center" component="h2" >
            About CarnetHealth Inc.
          </Typography>
          <Typography className={classes.pos} variant="display1" component="h2">
            Our Vision
          </Typography>
          <Typography className={classes.title} variant="headline"  gutterBottom align="center" component="p">
          Our vision is to create a healthcare management application to help patients,
          healthcare providers, government agencies and private insurers to manage, 
          communicate and process healthcare data and transaction for the well being of patient in Africa.
          </Typography>
          <Typography className={classes.pos} variant="display1" component="h2">
            Mission
          </Typography>
          <Typography className={classes.pos} variant="headline"  gutterBottom align="center" component="p">
          Our vision is to create a healthcare management application to help patients,
          healthcare providers, government agencies and private insurers to manage, 
          communicate and process healthcare data and transaction for the well being of patient in Africa.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);