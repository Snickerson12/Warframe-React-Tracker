import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

export default class FrameCard extends Component{

    render() {
        console.log(this.props.frames)
        if(this.props.frames) {
            return(
                this.props.frames.map(f => 
                <Card
                    header = {f.name}
                    description = {f.description}
                />
                )
            )       
        } else {return <div>Loading...</div>}
    }
}

{/* <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
/> */}