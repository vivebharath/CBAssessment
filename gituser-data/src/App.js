import './App.css';
import UserList from './UserList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from './UserDetail';

function App() {
  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<UserList />}/>
     <Route path="user-details/:username" element={<UserDetail/>}/>
     <Route path="*" element={<h1>NO Page Found</h1>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App;