import './App.css';
import Sidebar from './Components/Sidebar';
import FeaturedCharts from './Components/FeaturedCharts';
import AlbumDetails from './Components/AlbumDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <div className="flex flex-row bg-black text-white h-[90vh]">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] flex flex-col bg-[#121212] overflow-hidden">
        <Header />
  
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          <Routes>
            <Route path="/" element={<FeaturedCharts />} />
            <Route path="/albums/:id" element={<AlbumDetails />} />
          </Routes>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}


export default App;
