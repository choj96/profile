import { Route, Switch } from "react-router-dom";
// common
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
// main
import Content from "./components/main/Content";
import Visual from "./components/main/Visual";
// sub
import Department from "./components/sub/Department";
import Community from "./components/sub/Community";
import Schedule from "./components/sub/Schedule";
import Gallery from "./components/sub/Gallery";
import Join from "./components/sub/Join";
import Location from "./components/sub/Location";
import Youtube from "./components/sub/Youtube";
import Login from "./components/sub/Login";
import Logout from "./components/sub/Logout";

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header type={"main"} />
          <Visual />
          <Content />
        </Route>
        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>
      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Footer />
    </>
  );
}

export default App;
