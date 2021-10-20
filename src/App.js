
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
// import AuthProvider from './Contexts/authProvider';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Specialists from './Pages/Home/Specialists/Specialists';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/specialist">
            <Specialists></Specialists>
          </Route>
          <PrivateRoute exact path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
