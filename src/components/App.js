import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../res/css/main.css';


class App extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    static propTypes = {
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired
    };

    get content() {
        return (
            <Router
                routes={this.props.routes}
                history={this.props.history} />
        )
    }

    render() {
        return (
            <MuiThemeProvider>
                {this.content}
            </MuiThemeProvider>
        );
    }
}

export default App;
