import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Carts from "./components/Carts";
import SingleItem from "./components/SingleItem/SingleItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/Carts" component={Carts} />
          <Route exact path="/product/:id" component={SingleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
