import React, { Component, PropTypes } from 'react';
import Nav from '../nav/Nav';

export default class Wrapper extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth
            })
        }
        return (
            <div>
                <Nav auth={this.props.route.auth}/>
                <div className="container">
                    {children}
                </div>
            </div>
        )

    }

}