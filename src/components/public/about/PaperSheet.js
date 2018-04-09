import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const PaperSheet  = (props) => 
{
   const content = props.content 
    
    return (<div>
<Paper>
  <Card>
    <CardContent>
    {content}
    </CardContent>  
  </Card>
</Paper>
</div>);}

export default PaperSheet;