import React, { Component } from 'react';
import Content from '../content/Content';
import Sidebar from '../sidebar/Sidebar';
import { Switch, Route } from 'react-router-dom';
import Contact from '../contact/Contact';
import Introduce from '../introduce/Introduce';
import Category from '../category/category';
import Single from '../single/Single';

class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
				  <div className="row">
                    <Switch>
                        <Route exact path="/"><Content></Content></Route>
                        <Route path="/introduce"><Introduce></Introduce></Route>
                        <Route path="/category"><Category></Category></Route>
                        <Route path="/contact"><Contact></Contact></Route>
                        <Route path="/single"><Single></Single></Route>
                    </Switch>
					<Sidebar></Sidebar>
				  </div>
			</div>
        );
    }
}

export default Home;