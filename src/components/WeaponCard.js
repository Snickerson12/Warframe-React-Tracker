import React, {Component} from 'react';
const defaultLogo = 'https://glyphs.wf/assets/images/icon.png'

export default class FrameCard extends Component{

    handleClick = (index) => {
        localStorage.setItem(index, 'unowned')
        let card = document.getElementById(index).parentNode.parentNode
        if (localStorage.index === 'unowned') {
            card.style.backgroundColor = '#c9f1f5'
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
            <div className='weapon-card-container' onClick={() => this.handleClick(index)}>
                <div>
                    <div id={index}/>
                    <div className='weapon-image-container'>                   
                        <img src= {!w.wikiaThumbnail ? defaultLogo : w.wikiaThumbnail} className='weapon-image' alt={w.name}/>
                    </div>
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
        let filter;
        if(this.props.weapons && this.props.search == []) {
            filter = this.props.weapons.map((w, index) => this.renderCard(w, index))
        } else if (this.props.search) {
            filter = this.props.search.map((w, index) => this.renderCard(w, index))
        } else {return <div>Loading</div>}


        return (
            <div className='weapon-card'>
                {filter}
                {/* {this.props.weapons ? this.props.weapons.map((w, index) => this.renderCard(w, index)) : <div>Loading</div> } */}
            </div>
        )
    }
}

