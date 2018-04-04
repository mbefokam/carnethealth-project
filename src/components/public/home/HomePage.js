import  React from 'react';
import {Link} from 'react-router-dom';
import  Slideshow from './Slideshow';
import { Jumbotron,Button }from  'react-bootstrap';
class HomePage extends React.Component{
    render(){
        return (
            <div>
            <Slideshow />
            <h1>  </h1>
            <h1>  </h1>
            <Jumbotron>
                <h1>CarnetHealth Inc.</h1>
                 <p>
                       This is a simple hero unit, a simple jumbotron-style component for calling
                       extra attention to featured content or information.
                 </p>
                  <p>
                   <Button bsStyle="primary"><Link to ="about">Learn more</Link></Button>
                 </p>
            </Jumbotron>
            <div className="jumpbotron">
            <h1>  </h1>
            </div>
            </div>
        );
    }
}

export default HomePage;
