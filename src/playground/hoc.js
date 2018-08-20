// Higher Order Components (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation

// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private information</p>}
            <WrappedComponent {...props} />
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details" />, document.getElementById('app'));