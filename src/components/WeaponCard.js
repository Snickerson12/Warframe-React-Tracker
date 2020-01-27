import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

export default class FrameCard extends Component{
    constructor() {
        super()
        this.state = {
            owned: false,
            bgColor: 'white',
        }
    }

    handleClick = (e) => {
        let cardID = e.target.parentNode['id']
        console.log(cardID)
        if(this.state.owned === false) {
            this.setState({
                owned: true,
                bgColor: 'blue'
            })
        }else{
            this.setState({
                owned: false,
                bgColor: 'white'
            })
        }
    }

    renderCard = (w, index) => {
        return(
            <Card
                id = {index + 1}
                image = {w.wikiaThumbnail}
                header = {w.name}
                description = {w.description}
                onClick = {this.handleClick}
                style = {{backgroundColor: this.state.bgColor}}
            />
        )
    }

    render() {
        return (
            <div className='weapon-card'>
                {this.props.weapons
                ?
                    this.props.weapons.map((w, index) => this.renderCard(w, index))
                :
                    <div>Loading</div>
                }
            </div>
        )
    }
}

