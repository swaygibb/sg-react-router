import React from "react";
import Nav from "./components/shared/Nav";
import FeaturedDeals from "./components/deals/FeaturedDeals";
import Footer from "./components/shared/Footer";
import Login from "./components/users/Login";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateAccount from "./components/users/CreateAccount";
import CreateBusiness from "./components/business/CreateBusiness";
import { useApp } from "./components/hooks/useApp";
import About from "./components/about/About";

interface Props {}

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
  },
}));

const App: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const { userLoggedIn } = useApp();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Nav />
        </Container>

        <Switch>
          <Route exact path="/">
            <FeaturedDeals />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/create-account">
            <CreateAccount />
          </Route>
          {userLoggedIn() && (
            <Route exact path="/business-signup">
              <CreateBusiness />
            </Route>
          )}

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
