import './App.css';
import HomePage from './components/homepage';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import WorkSample from './components/workSample';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/personal-website/" component={HomePage} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/workSample" component={WorkSample} />
      </Switch>
    </div>
  );
}

export default App;

