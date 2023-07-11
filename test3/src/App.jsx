import RoomSchedule from './components/RoomSchedule';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './assets/style.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='' element={<Home />} />
          <Route path='booking/A101' element={<RoomSchedule />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
