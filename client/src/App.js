import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import FavoritesList from "./pages/FavoritesList";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      
      <StoreProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/favorites" component={FavoritesList} />
          <Route exact path="/posts/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;