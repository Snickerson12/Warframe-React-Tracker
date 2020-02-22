import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.input)
    }

    render() {
        return(
            <div className='login-page'>
                <div id='login-text'>User Login</div>
                <div className='sign-up-text'>
                    <a href='/enroll'>Don't have an account? Sign up here</a>
                </div>
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