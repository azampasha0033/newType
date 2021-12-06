import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/login';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);

export default RouterComponent;
