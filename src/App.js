import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { SideBar } from './components/SideBar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <Switch>
                  <Route exact={true} path="/" component={Dashboard} />
                  <Route exact={true} path="/table" component={Table} />
                </Switch>
              </div>

            </div>
          </div>

        </div>



      </div>
    </BrowserRouter>
  );
}

export default App;
