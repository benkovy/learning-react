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
            <div className="login-form-container">
                {this.state.error && <p>{this.state.error}</p>}
                <form className="login-form-container__form" onSubmit={this.onSubmit}>
                    <div className="login-form-container__user-pass">
                        <input
                            className="input"
                            type="text"
                            placeholder="Email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <div className="filler"></div>
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div className="login-form-container__select-button">
                        <button className="button">
                            {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
                        </button>
                        <select
                            value={this.state.type}
                            onChange={this.onTypeChange}>
                            <option value="login">Login</option>
                            <option value="create">Create</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}