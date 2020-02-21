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
                <div>User Login</div>
                <form>
                    <label>Username </label>
                    <input type="text" name="username" onChange={this.handleChange}/>
                    <label> Password </label>
                    <input type="email" name="email" onChange={this.handleChange}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}