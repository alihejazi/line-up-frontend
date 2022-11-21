import { Routes, Route } from "react-router-dom"
import './App.css';
import UserDetail from "./pages/UserDetail/UserDetail";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="users/:id" element={ <UserDetail/> }/>
      </Routes>
    </div>
  );
}

export default App;
