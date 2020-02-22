import React, {Component} from 'react';

export default class Enroll extends Component {
    render() {
        return(
            <div className='login-page'>
                <div id='login-text'>Create an Account</div>
                <p> We recommend using your in-game name as your username</p>
                <form id='login-form'>
                    <label id='form-label'>Username </label>
                    <input type="text" name="username" onChange={this.handleChange} id='form-input'/>
                    <label id='form-label'> Password </label>
                    <input type="email" name="email" onChange={this.handleChange} id='form-input'/>
                    <input type="submit" value="submit" className='login-submit' />
                </form>
            </div>
        )
    }
}