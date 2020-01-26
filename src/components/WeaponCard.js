import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

export default class FrameCard extends Component{
    constructor() {
        super()
        this.state = {
            owned: false,
            bgColor: 'none'
        }
    }

    handleClick = () => {
        console.log("clicked")
        this.setState({
            owned: true
        })
        if(this.state.owned) {
            this.setState({
                bgColor: 'blue'
            })
        }
    }

    render() {
        console.log(this.props.weapons)
        if(this.props.weapons) {
            return(
                this.props.weapons.map(w => 
                <Card
                    image = {w.wikiaThumbnail}
                    header = {w.name}
                    description = {w.description}
                    onClick = {this.handleClick}
                    style = {{backgroundColor: this.state.bgColor}}
                />
                )
            )       
        } else {return <div>Loading...</div>}
    }
}