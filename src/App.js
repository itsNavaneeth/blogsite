import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './NotFound';
import SubmitIdea from './SubmitIdea';
import IdeaDetails from './IdeaDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/ideas' element={<Home />} />
            <Route exact path='/ideas/:id' element={<IdeaDetails />} />
            <Route exact path='/submit' element={<SubmitIdea />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
