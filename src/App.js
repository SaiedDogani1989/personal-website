import { Route, Switch } from 'react-router-dom';
import MainPage from "./Components/MainPage";
import AboutMe from "./Components/About-Me/AboutMe";
import Contact from "./Components/Contact/Contact";
import WorkSample from './Components/WorkSample/WorkSample';
import './App.css';
import SecondNav from './Components/Navbar/SecondNavabar';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';


function App() {

  return (
    <div>
      <Navbar />
      <SecondNav />
      <Switch>
        <Route  path="/personal-website" component={MainPage} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/workSample" component={WorkSample} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

