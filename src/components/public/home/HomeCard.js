import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 445,
    maxheight: 500
  },
  media: {
    height: 300,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="../../../assets/images/HealthcareTech.jpg"
          title="CarnetHealth Inc"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Who We Are
          </Typography>
          <Typography component="p">
          CarnetHealth Inc. goals is to create a healthcare management application to help patients, 
          healthcare providers, government agencies and private insurers to manage, 
          communicate and process healthcare data and transaction for the well being of patient in Africa.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="midium" color="primary">
          <Link to="about">Learn more</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
