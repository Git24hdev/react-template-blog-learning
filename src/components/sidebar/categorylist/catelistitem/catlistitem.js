import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class catlistitem extends Component {
    render() {
        return (
        <li><NavLink to={this.props.url} activeClassName="active">{this.props.children}</NavLink></li>
        );
    }
}

export default catlistitem;