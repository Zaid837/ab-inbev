import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserDashboard from "./layout/userDashboard";
import Browse from "./pages/browse/browse";
import Playlists from "./pages/playlists/playlists";
import UserDashboardPage from "./pages/userDashboardPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <UserDashboard>
                <UserDashboardPage />
              </UserDashboard>
            </Route>
            <Route exact path="/playlists/:id" component={Playlists} />
            <Route path="/browse/:id" component={Browse} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
