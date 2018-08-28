import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            type: 'login',
            error: ''
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onTypeChange = (e) => {
        const type = e.target.value.toLowerCase();
        this.setState(() => ({ type }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email || !this.state.password) {
            this.setState(() => ({ error: 'Please enter a valid email and password' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                type: this.state.type,
                email: this.state.email,
                password: this.state.password
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        autoFocus
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <button>Go</button>
                    <select
                        value={this.state.type}
                        onChange={this.onTypeChange}>
                        <option value="login">Login</option>
                        <option value="create">Create</option>
                    </select>
                </form>
            </div>
        );
    }
}