import { createContext, useEffect, useState } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/About/About'
import Login from './Components/Auth/Login';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Medicines from './Components/Medicines/Medicines';
import Register from './Components/Auth/Register';
import Drug from './Components/Body/Drug/Drug';
import Order from './Components/Body/Order/Order';
import NotFound from './Components/notFound/NotFound';
import PrivateRoute from './Components/Auth/PrivetRoute';
import UserState from './Components/Auth/Auths/userState/UserState';
export const DataContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/drugApi.json')
      .then(res => res.json())
      .then(item => setData(item))
  }, [])
  const {user} = UserState()
  return (
    <DataContext.Provider value={data}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Body ></Body>
            </Route>
            <Route path="/home">
              <Body ></Body>
            </Route>
            <Route path="/medicines">
              <Medicines></Medicines>
            </Route>
            <Route path="/drug/:drugId">
              <Drug></Drug>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </UserContext.Provider >
    </DataContext.Provider>
  );
}

export default App;
