import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/SharePage/Header';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import  NotFound from './components/NotFound/NotFound';
import Footer from './components/SharePage/Footer';
import Prices from './components/Prices/Prices';
import OurDentist from './components/OurDentist/OurDentist';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <PrivateRoute path="/prices">
              <Prices></Prices>
            </PrivateRoute>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/ourdentist">
              <OurDentist></OurDentist>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
