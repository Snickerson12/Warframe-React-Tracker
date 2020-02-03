import React, {Component} from 'react';

const defaultLogo = 'https://glyphs.wf/assets/images/icon.png'

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
    

    renderCard = (f, index) => {
        return(
            <div className='frame-card-container' onClick={() => this.handleClick(index)}>
                <div>
                    <div id={index}/>
                    <div>
                        <img src= {!f.wikiaThumbnail ? defaultLogo : f.wikiaThumbnail} className='frame-image'/>
                    </div>
                    <div className="header">{f.name}</div>
                    <div className="description"> {f.description} </div>
                    <form className='checkbox'>
                        <label> Mastered? </label>
                        <input type='checkbox'/>
                    </form>
                </div>
            </div>
        )
    }
   
    render() {
        return(
            <div className='frame-card'>
                {this.props.frames
                ?
                    this.props.frames.map((f, index) => this.renderCard(f, index))
                :
                    <div>Loading</div>
                }
            </div>  
        )       
    }
}