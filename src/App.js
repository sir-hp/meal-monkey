import './App.css';
import { Router } from '@reach/router';
import TheMeal from './components/TheMeal';
import Meal from './components/Meal'

function App() {
  return (
    <>
      <Router>
        <TheMeal path="/" />
        <Meal path="/:category" />

      </Router>
    </>
  );
}

export default App;
