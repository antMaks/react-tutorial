import NavBar from './Components/NavBar/NavBar.js'  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/App.css'
import Home from './Components/pages/Home.js';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
     </Router>
    </>
  );
}

export default App;
