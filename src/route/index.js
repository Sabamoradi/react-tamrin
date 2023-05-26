import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Views from '../views/index'
import BirthdayReminder from "../views/1-BirthdayReminder";

const RouteFile = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Views } /> */}
        <Route exact path="/birthday" component={BirthdayReminder} />
      </Switch>
    </Router>
  );
};

export default RouteFile;
