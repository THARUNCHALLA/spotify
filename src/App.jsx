import './App.css';
import Sidebar from './Components/Sidebar';
import FeaturedCharts from './Components/FeaturedCharts';
import AlbumDetails from './Components/AlbumDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
    <div className="flex flex-row bg-black text-white h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] flex-1 bg-[#121212]">
        <Header/>
        <Routes>
          <Route path="/" element={<FeaturedCharts />} />
          <Route path="/albums/:id" element={<AlbumDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
