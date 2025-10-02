import { IoLibraryOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Library = () => {
  return (
    <div className="bg-[#121212] w-full h-auto p-4 flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer p-2 rounded-md hover:bg-[#1a1a1a] transition-colors">
          <IoLibraryOutline size={22} />
          <span className="font-bold text-sm">Your Library</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaArrowRight className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <FaPlus className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      <div className="bg-neutral-800 rounded-lg p-4 flex flex-col space-y-2 hover:bg-neutral-700 transition-colors">
        <h5 className="text-white font-semibold text-sm">
          Create your first playlist
        </h5>
        <p className="text-gray-400 text-xs">
          It’s easy, we’ll help you
        </p>
        <button className="bg-white text-black font-bold text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform self-start">
          Create playlist
        </button>
      </div>

      {/* Card: Browse Podcasts */}
      <div className="bg-neutral-800 rounded-lg p-4 flex flex-col space-y-2 hover:bg-neutral-700 transition-colors">
        <h5 className="text-white font-semibold text-sm">
          Find new podcasts
        </h5>
        <p className="text-gray-400 text-xs">
          We'll keep you up to date with the latest releases.
        </p>
        <button className="bg-white text-black font-bold text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform self-start">
          Browse podcasts
        </button>
      </div>

    </div>
  );
};

export default Library;
