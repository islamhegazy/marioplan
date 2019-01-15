import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Nav from './Components/layout/Nav';
import Dash from './Components/dashboard/Dash';
import ProjectDetails from './Components/projects/ProjectDetails';
import Sigin from'./Components/authentication/Sigin';
import SignUp from'./Components/authentication/SignUp';
import CreateProject from './Components/projects/CreateProject';

 class App extends Component{
    render(){
        return (
        <BrowserRouter>
             <div className="App">
                <Nav />
                <div className="content">
                    <Switch>
                    <Route exact path="/" component={Dash}></Route>
                    <Route  path="/project/:id" component={ProjectDetails}></Route>
                    <Route  path="/sigin" component={Sigin}></Route>
                    <Route  path="/SignUp" component={SignUp}></Route>
                    <Route  path="/CreateProject" component={CreateProject}></Route>
                </Switch>
                </div>
            </div>
        </BrowserRouter>
       
        );
    };
};

export default App;