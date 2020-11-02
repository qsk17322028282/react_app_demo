import React,{Component} from 'react';
import {BrowserRouter,Route,} from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableLogin = Loadable({
    loader: () => import('../pages/Login/index.js'),
    loading: () => null,
})
const LoadableHome = Loadable({
    loader: () => import('../pages/home/index.js'),
    loading: () => null,
})
const LoadableWu = Loadable({
    loader: () => import('../pages/404/index.js'),
    loading: () => null,
})
// @withRouter
class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
                <Route path='/' exact component={LoadableLogin}></Route>
                <Route path='/login' component={LoadableLogin}></Route>
                <Route path='/home' component={LoadableHome}></Route>
                <Route path='/404' component={LoadableWu}></Route>
            </BrowserRouter>
        )
    }
}
export default Routes;