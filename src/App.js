import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Employees } from './Pages'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Employees}/>
    </Router>
  );
}

export default App;
