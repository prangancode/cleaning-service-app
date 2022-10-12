
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/LandingPage/Home/Home';
import PageFour from './Pages/PageFour/PageFour/PageFour';
import PageThree from './Pages/PageThree/PageThree/PageThree';
import PageTwo from './Pages/PageTwo/PageTwo/PageTwo';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/page2" >
            <PageTwo />
          </Route>
          <Route path="/page3" >
            <PageThree />
          </Route>
          <Route path="/page4" >
            <PageFour />
          </Route>

        </Switch>
      </Router>
    </>

  );
}

export default App;
