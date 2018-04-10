import React from 'react'; 
import { Grid, Row, Col,Image} from 'react-bootstrap'; 
import Vision from './Vision';  
import './AboutPage.css';
import TopImage from '../../../assets/images/About/TopImage/medicalSystem.jpg';

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
                        <Col sm={6} md={2}>
                         
                        </Col>
                        <Col sm={16} md={12}>
                        <Vision /> 
                        </Col>
                        <Col sm={6} md={2}>
                          
                        </Col>
                    </Row> 

            </Grid>
          
        );
    }
}

export default AboutPage;
