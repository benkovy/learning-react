import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startCreation } from '../actions/auth';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
    onSubmit = (credentials) => {
        if (credentials.type === 'login') {
            this.props.startLogin({ email: credentials.email, password: credentials.password });
        } else {
            this.props.startCreation({ email: credentials.email, password: credentials.password });
        }
    };

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (credentials) => dispatch(startLogin(credentials)),
    startCreation: (credentials) => dispatch(startCreation(credentials))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);