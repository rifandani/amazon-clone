import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// files
import { ProductProvider } from './contexts/ProductState';
import useAuth from './hooks/useAuth';
import UserContext from './contexts/UserContext';
// components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Forgot from './components/Forgot/Forgot';
import EditProfile from './components/EditProfile/EditProfile';
import Categories from './components/Categories/Categories';

function App() {
  const [user, setUser] = useAuth();

  console.log('User => ', user);

  return (
    <ProductProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="app">
          <ToastContainer />

          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/forgot-password">
              <Forgot />
            </Route>
            <Route exact path="/edit-profile">
              <Header />
              <EditProfile />
              <Footer />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route exact path="/categories/:slug">
              <Header />
              <Categories />
              <Footer />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </ProductProvider>
  );
}

export default App;
