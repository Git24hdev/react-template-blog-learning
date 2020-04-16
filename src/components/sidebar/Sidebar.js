import React, { Component } from 'react';
import Search from './search/Search';
import Categorylist from './categorylist/Categorylist';
import RecentPost from './recentpost/RecentPost';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-4">
				  <Search></Search>
				  <Categorylist></Categorylist>
                  <RecentPost></RecentPost>
			</div>
        );
    }
}

export default Sidebar;