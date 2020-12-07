import NavBar from './Components/NavBar/NavBar.js'  
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/App.css'
import Home from '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/Components/pages/Home.js';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
     </Router>
    </>
  );
}

export default App;
