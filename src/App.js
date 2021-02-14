import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Employees } from './Pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Layout/Header'

function App() {
  AOS.init({
    once: true,
  })
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Employees}/>
    </Router>
  );
}

export default App;
