import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Navbar } from './components/Navbar';
import { RequireAuth } from './components/RequireAuth';

const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth> 
        } />
      </Routes>
    </div>
  )
}

export default App
