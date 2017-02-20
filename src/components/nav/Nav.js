import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import AuthService from '../../utils/AuthService'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = (props) => {
    return (
        <IconMenu
            {...props}
            iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
        </IconMenu>
    )
};

Menu.muiName = 'IconMenu';

export default class Nav extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    static propTypes = {
        location: PropTypes.object,
        auth: PropTypes.instanceOf(AuthService)
    };

    render() {
        const { auth } = this.props;
        return (
            <AppBar
                title="Search"
                iconElementRight={ auth.loggedIn() ? <Menu/> : <FlatButton label={"Login"} onClick={auth.login.bind(this)} /> }
            />
        )
    }
}