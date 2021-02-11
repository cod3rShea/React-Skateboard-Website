import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/> 
          <Route path='/about' exact component={About}/> 
          <Route path='/contact' exact component={Contact}/> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
