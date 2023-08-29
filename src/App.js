import Header from './Components/NoteComponents/Header';
import Notes from './Components/NoteComponents/Notes';
import './Components/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main">
      <Header/>
      <Notes/>
    </div>
  );
}

export default App;
