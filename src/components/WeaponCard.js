import React, {Component} from 'react';

export default class FrameCard extends Component{

    handleClick = (index) => {
        localStorage.setItem(index, 'unowned')
        let card = document.getElementById(index).parentNode.parentNode
        if (localStorage.index == 'unowned') {
            card.style.backgroundColor = 'teal'
            localStorage.index = 'owned'
        } else {
            card.style.backgroundColor = 'white'
            localStorage.index = 'unowned'
        }
    }

    handleButton = () => {
        console.log('button')
    }

    renderCard = (w, index) => {
        return(
            <div className='card-container' onClick={() => this.handleClick(index)}>
                <div>
                    <div id={index}/>
                    <div><img src={w.wikiaThumbnail} className='image'/></div>
                    <div className="header">{w.name}</div>
                    <div className="description"> {w.description} </div>
                    <form className='checkbox'>
                        <label> Mastered? </label>
                        <input type='checkbox'/>
                    </form>
                </div>
            </div>
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

