import React, {Component} from 'react';

const imgSrc = 'https://www.stickpng.com/assets/images/58a1fbccc8dd3432c6fa8214.png'

export default class Home extends Component{
    render() {
        return(
            <div className='homepage'>
                <img src = {imgSrc} className='home-logo'/> 
                <div className='home-text'> Dedicated website to assist users in tracking frame and weapon ownership and mastery </div>
            </div>
        )
    }
}