import  React from 'react';
import SideMenu from './SideMenu';
//import Divider from 'material-ui/Divider';
import {List, ListItem,Divider, TextField,Paper} from 'material-ui'; 
import { Grid,Row,Col}from  'react-bootstrap';

var styles = {
	color:'red',
    backgroundColor:'blue'
};
  

class AboutPage extends React.Component{
    render(){
        return(
            <Grid >
            <Row className="show-grid" >
            <Col xs={6} md={4}>
                <SideMenu />
              </Col>
              <Col xs={12} md={8}>
                <code>&lt;{'Col xs={12} md={8}'} /">">&gt;</code>
              </Col>              
            </Row>
            </Grid>
        );
    }
}

export default AboutPage;
