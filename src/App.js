import React,{Component} from 'react';
import {BrowserRouter,HashRouter, Route,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Login from './pages/Login/index.js';
import Home from './pages/Home/index.js';
import Wu from './pages/404/index.js';

// const LoadableLogin = Loadable({
//     loader: () => import('./pages/Login/index.js'),
//     loading: () => null,
// })
// const LoadableHome = Loadable({
//     loader: () => import('./pages/home/index.js'),
//     loading: () => null,
// })
// const LoadableWu = Loadable({
//     loader: () => import('./pages/404/index.js'),
//     loading: () => null,
// })
// @withRouter
class App extends Component{
    render(){
        return (
            <HashRouter>
              <Switch>
                <Route path='/' component={Login}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/404' component={Wu}></Route>
              </Switch>
            </HashRouter>
        )
    }
}
export default App;