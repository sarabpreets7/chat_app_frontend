import logo from './logo.svg';
import './App.css';
import { BrowserRouter,
  Routes,Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} exact />
          <Route path="/chats" element={<Chatpage></Chatpage>} exact />
          {/* <Route path="/chats" component={Chatpage} /> */}
        </Routes>
      
      
    </div>
  );
}

export default App;
