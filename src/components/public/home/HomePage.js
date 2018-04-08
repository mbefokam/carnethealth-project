import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import { Grid, Col, Row } from 'react-bootstrap';


import Slideshow from './Slideshow';
import HomeCard from './HomeCard';
import TablesMedical from './TablesMedical';
import PatientDocumentation from '../../../assets/images/Home/Cards/PatientDocumentation.jpg';
import PatientRecords from '../../../assets/images/Home/Cards/PatientRecords.jpg';
import PatientDigitalData from '../../../assets/images/Home/Cards/PatientDigitalData.jpg';


const styles = {
    padding: 0,
    marginTop: 20,
    marginBottom: 20

}

//<Slideshow /> <HomeCard  images ={PatientDocumentation} />
class HomePage extends React.Component {
    render() {
        return (
            <Grid style={styles}>
                 {/* <Grid style={{
                    padding: 0,
                    marginTop: 20,
                    marginBottom: 10,

                }}> */}
                    <Row className="show-grid" style={{
                    padding: 0,
                    marginBottom: 10,

                }}>
                        <Col sm={6} md={2}> 
                        </Col>
                        <Col sm={18} md={12}>
                        <Slideshow />
                        </Col>
                        <Col sm={6} md={2}> 
                        </Col>
                    </Row>
                {/* </Grid>
                <Grid style={styles}> */}
                    <Row className="show-grid">
                        <Col sm={8} md={4}>
                        <HomeCard 
                        images ={PatientDocumentation}
                        />
                        </Col>
                        <Col sm={8} md={4}>
                        <HomeCard 
                        images ={PatientRecords}
                        />
                        </Col>
                        <Col sm={8} md={4}>
                        <HomeCard 
                        images ={PatientDigitalData}
                        />
                        </Col>
                    </Row>
                {/* </Grid> */}

            </Grid>
        );
    }
}

export default HomePage;
