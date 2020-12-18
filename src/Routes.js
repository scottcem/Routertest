import React, {Component} from 'react'
import{BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import LocationPage from './components/LocationPage';
import NavBarPage from './NavBarPage';

class RoutesPage extends Component {
    render() {
        return (
            <Router>
             <NavBarPage/>
             <div>
                    <hr />
                    <Route name="Home" exact path="/" component={HomePage} />
                    <Route name="Menu" path="/menu" component={MenuPage} />
                    <Route name="About" path="/about" component={AboutPage} />
                    <Route name="Location" path="/location" component={LocationPage} />
            </div>
            </Router>
        );
    }
}

export default RoutesPage;
