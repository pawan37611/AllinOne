import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';    
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Add from './component/add'
import StudentList from './component/studentlist'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
  <div>
    <Switch>
    <Route path="/new" component={Add}/>
    {/* <Route path="/:id" component={PostDetails}/> */}
    <Route path="/" component={StudentList}/>
    
  

    </Switch>
      
  </div>
  </BrowserRouter>  
  </Provider>
  , document.querySelector('#root'));