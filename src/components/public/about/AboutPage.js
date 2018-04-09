import React from 'react';
import SideMenu from './SideMenu';
//import Divider from 'material-ui/Divider';
import { List, ListItem, Divider, TextField, Paper } from 'material-ui';
import { Grid, Row, Col,Image} from 'react-bootstrap';
import PaperSheet from './PaperSheet';
import Vision from './Vision';
import PatientDigitalData from '../../../assets/images/Home/Cards/PatientDigitalData.jpg';
import HomeCard from '../home/HomeCard';
import './AboutPage.css';
import TopImage from '../../../assets/images/About/TopImage/dog-people.jpg';

const styles = {
    padding: 0,
    marginTop: 20,
    marginBottom: 20

}


class AboutPage extends React.Component {
    render() {
        return (     
            <Grid style={styles}>
            
                    <Row className="show-grid" style={{
                    padding: 0,
                    marginBottom: 10,
                    marginTop: 20,

                }}>
                        <Col sm={6} md={2}> 
                        </Col>
                        <Col sm={18} md={12}>
                        <Image src={TopImage} className="header-image"/>
                        </Col>
                        <Col sm={6} md={2}> 
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col sm={8} md={4}>
                         
                        </Col>
                        <Col sm={8} md={4}>
                         
                        />
                        </Col>
                        <Col sm={8} md={4}>
                         
                        />
                        </Col>
                    </Row> 

            </Grid>
          
        );
    }
}

export default AboutPage;
