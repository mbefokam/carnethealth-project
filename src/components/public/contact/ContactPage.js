import React  from 'react';  
import { Grid, Col, Row } from 'react-bootstrap';
import Card from 'material-ui/Card';
import Form from './Form';
import GoogleMap from './GoogleMap';

const styles = {
    padding: 0,
    marginTop: 20,
    marginBottom: 20,

}

//<Slideshow /> <HomeCard  images ={PatientDocumentation} />
class HomePage extends React.Component {
    render() {
        return (
            <Grid style={styles}>
                    <Row className="show-grid" style={{
                    padding: 0,
                    marginBottom: 10,
                    }}>
                        <Col sm={6} md={4}> 
                        
                        </Col>
                        <Col sm={16} md={6}>
                        <Card style={{border: 'green'}}>
                        <Form />
                        </Card>
                        </Col>
                        <Col sm={8} md={4}> 
                        </Col>
                    </Row>
                    <GoogleMap />
            </Grid>
        );
    }
}

export default HomePage;
