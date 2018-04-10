import React from 'react';
import PropTypes from 'prop-types'; 
import Paper from 'material-ui/Paper'; 
import Card, { CardContent } from 'material-ui/Card';



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