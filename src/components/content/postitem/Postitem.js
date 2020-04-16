import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Postitem extends Component {
    render() {
        return (
            <div className="card mb-4">
                <img className="card-img-top" src={this.props.imageURL} alt="Card image cap" />
                <div className="card-body">
                    <h2 className="card-title">{this.props.children}</h2>
                    <p className="card-text">{this.props.desc}</p>
                    <span className="btn btn-success text-light"><NavLink to={this.props.url} >Read More →</NavLink></span>
                </div>
                <div className="card-footer text-muted">
                    {this.props.date}
                    <span>{this.props.author}</span>
                </div>
            </div>
        );
    }
}

export default Postitem;