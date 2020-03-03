import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import StarWars from './components/startWarsPerson.jsx';
import LedySesion from './components/ladySession';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDJAAhKl6ePlOI3zwvB24j46ksEP-WqN_Y",
      authDomain: "store-online-f4106.firebaseapp.com",
      databaseURL: "https://store-online-f4106.firebaseio.com",
      projectId: "store-online-f4106",
      storageBucket: "store-online-f4106.appspot.com",
      messagingSenderId: "539347539610",
    });
  }
  
  render() {
    return (
      <div className="fondo">                                                                  
        <BrowserRouter>
         <Switch>
           <Route exact path='/' component={StarWars}/>
           <Route exact path='/LedySesion' component={LedySesion}/>
         </Switch>
         </BrowserRouter>
      </div>
    );
  }
}



export default App;

