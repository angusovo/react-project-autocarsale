import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Pages/Home';
import Carlist from "./Pages/Carlist"
import SellCar from './Pages/SellCar';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Footer from './Component/Footer';
import Cars from './Pages/Cars';
import SignUp from './Pages/SignUp';
import { AuthProvider } from './Context/AuthContext';
import Login from './Pages/Login';
import SellCarInfo from './Pages/SellCarInfo';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/carlist" component={Carlist}/>
            <Route path="/sellcar" exact component={SellCar}/>
            <Route path="/blogs/:blogId" component={Blog}/>
            <Route path="/about" component={About}/>
            <Route path="/cars/:carId" component={Cars}/>
            <PrivateRoute exact path="/signup">
              <SignUp/>
            </PrivateRoute>
            <PrivateRoute exact path="/login">
              <Login />
            </PrivateRoute>
            <Route path="/sellcarinfo" component={SellCarInfo}/>
          </Switch>
          <Footer/>
          </AuthProvider>
      </Router>
    </>
  );
}

export default App;
