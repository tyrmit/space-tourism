import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Page from './components/Page/Page';
import HomePage from './components/Page/HomePage/HomePage';
// import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import CrewPage from './components/Page/CrewPage/CrewPage';
import DestinationPage from './components/Page/DestinationPage/DestinationPage';
import TechPage from './components/Page/TechPage/TechPage';

function App() {
    const routes = (
        <Switch>
            <Route path="/crew">
                <CrewPage />
            </Route>
            <Route path="/destinations">
                <DestinationPage />
            </Route>
            <Route path="/tech">
                <TechPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
    );
    return (
        <Page>
            <Router>{routes}</Router>
        </Page>
    );
}

export default App;
