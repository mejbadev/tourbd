import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Componants/About/About';
import Home from './Componants/Home/Home';
import AuthProvider from './Componants/Context/AuthProvider';
import Login from './Componants/Login/Login';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import AddAService from './Componants/AddAService/AddAService';
import AddAOrder from './Componants/AddAOrder/AddAOrder';
import MyOrders from './Componants/MyOrders/MyOrders';
import ManageOrders from './Componants/ManageOrders/ManageOrders';
import ContactUs from './Componants/ContactUs/ContactUs';
import Footer from './Componants/Footer/Footer';
import NotFound from './Componants/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
        <ContactUs></ContactUs>
        </Route>
        <PrivateRoute path='/addAService'>
          <AddAService></AddAService>
        </PrivateRoute>
        <PrivateRoute path='/addOrder/:id'>
          <AddAOrder></AddAOrder>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/myOrder'>
          <MyOrders></MyOrders>
        </Route>
        <Route path='/manageOrder'>
          <ManageOrders></ManageOrders>
        </Route>
        <Route path='*'>
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
