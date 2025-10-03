import './App.css';
import Sidebar from './Components/Sidebar';
import FeaturedCharts from './Components/FeaturedCharts';
import AlbumDetails from './Components/AlbumDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-row flex-1">
        <div className="hidden lg:block lg:w-[20%]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[80%] flex flex-col bg-[#121212] overflow-hidden">
          <div className='lg:block hidden'>
            <Header />
          </div>
          <div className="flex-1 overflow-y-scroll scrollbar-hide">
            <Routes>
              <Route path="/" element={<FeaturedCharts />} />
              <Route path="/albums/:id" element={<AlbumDetails />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
