import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RecentPost extends Component {
    render() {
        return (
            <div className="card my-4">
				<h5 className="card-header">Recent Post</h5>
				<div className="card-body">
					<ul className="list-unstyled mb-0">
						<li><NavLink to="/single/post-title-01">Post title 01</NavLink></li>
                        <li><NavLink to="/single/post-title-02">Post title 02</NavLink></li>
                        <li><NavLink to="/single/post-title-03">Post title 03</NavLink></li>
                        <li><NavLink to="/single/post-title-04">Post title 04</NavLink></li>
                        <li><NavLink to="/single/post-title-05">Post title 05</NavLink></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default RecentPost;