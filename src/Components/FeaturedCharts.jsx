import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "./redux";
import { albumsData, songsData, assets, ntrAnnaSongs } from "../assets/Data";
import { useNavigate } from "react-router-dom";

const FeaturedCharts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todayHits, setTodayHits] = useState(
    songsData.map((song) => ({ ...song, toggle: false }))
  );

  const [ntrSongs, setNtrSongs] = useState(
    ntrAnnaSongs.map((song) => ({ ...song, toggle: false }))
  );

  const onNavigateToAlbum = (id) => {
    navigate(`/albums/${id}`);
  };

  const playSong = (song, list, setList) => {
    const updatedList = list.map((s) =>
      s.id === song.id ? { ...s, toggle: true } : { ...s, toggle: false }
    );
    setList(updatedList);
    dispatch(setCurrentSong(song));
  };

  const stopSong = (song, list, setList) => {
    const updatedList = list.map((s) =>
      s.id === song.id ? { ...s, toggle: false } : s
    );
    setList(updatedList);
    dispatch(setCurrentSong(null));
  };

  return (
    <div className="flex-1 p-6 space-y-10">
      {/* Featured Charts Section */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-purple-800/30 to-pink-700/20 rounded-2xl p-4 sm:p-6 shadow-lg">
        <h3 className="flex items-center gap-2 text-lg lg:text-2xl font-bold mb-4 text-white">
          <img src={assets.plays_icon} alt="charts" className="w-6 h-6" />
          Featured Charts
        </h3>
        <div className="flex flex-row gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth px-2 lg:px-4">
          {albumsData.map((album) => (
            <div
              key={album.id}
              className="flex flex-col rounded-xl p-4 sm:p-5 bg-gray-900/60 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
              onClick={() => onNavigateToAlbum(album.id)}
            >
              <img
                src={album.image}
                alt={album.name}
                className="h-[120px] lg:w-40 lg:h-40 object-cover mb-2 sm:mb-4 rounded-xl"
              />
              <h4 className="text-white font-semibold text-sm sm:text-base truncate">{album.name}</h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 truncate">{album.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NTR Songs */}
      <div className="bg-gradient-to-r from-yellow-600/30 via-orange-600/20 to-red-700/20 rounded-2xl p-4 sm:p-6 shadow-lg">
        <h3 className="flex items-center gap-2 text-lg lg:text-2xl font-bold mb-4 text-white">
          <img src={assets.mic_icon} alt="NTR" className="w-6 h-6" />
          NTR Biggest Hits
        </h3>
        <div className="flex flex-row gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth px-2 lg:px-4">
          {ntrSongs.map((song) => (
            <div
              key={song.id}
              className="flex flex-col rounded-xl p-4 sm:p-5 bg-gray-900/60 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
            >
              <div className="relative">
                <img
                  src={song.image}
                  alt={song.name}
                  className="h-[120px] lg:w-40 lg:h-40 object-cover mb-2 sm:mb-4 rounded-xl"
                />
                {/* Play/Pause with animation */}
                <img
                  src={song.toggle ? assets.pause_icon : assets.play_icon}
                  alt={song.toggle ? "Pause" : "Play"}
                  className="absolute inset-0 m-auto w-10 h-10 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    song.toggle
                      ? stopSong(song, ntrSongs, setNtrSongs)
                      : playSong(song, ntrSongs, setNtrSongs)
                  }
                />
                {song.toggle && (
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <span className="w-1 h-3 bg-green-400 animate-pulse"></span>
                    <span className="w-1 h-5 bg-green-500 animate-bounce"></span>
                    <span className="w-1 h-4 bg-green-400 animate-pulse delay-200"></span>
                  </div>
                )}
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base truncate">{song.name}</h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 truncate">{song.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Hits */}
      <div className="bg-gradient-to-r from-blue-700/30 via-cyan-600/20 to-emerald-600/20 rounded-2xl p-4 sm:p-6 shadow-lg">
        <h3 className="flex items-center gap-2 text-lg lg:text-2xl font-bold mb-4 text-white">
          <img src={assets.like_icon} alt="today" className="w-6 h-6" />
          Today's Biggest Hits
        </h3>
        <div className="flex flex-row gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth px-2 lg:px-4">
          {todayHits.map((song) => (
            <div
              key={song.id}
              className="flex flex-col rounded-xl p-4 sm:p-5 bg-gray-900/60 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
            >
              <div className="relative">
                <img
                  src={song.image}
                  alt={song.name}
                  className="h-[120px] lg:w-40 lg:h-40 object-cover mb-2 sm:mb-4 rounded-xl"
                />
                <img
                  src={song.toggle ? assets.pause_icon : assets.play_icon}
                  alt={song.toggle ? "Pause" : "Play"}
                  className="absolute inset-0 m-auto w-10 h-10 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    song.toggle
                      ? stopSong(song, todayHits, setTodayHits)
                      : playSong(song, todayHits, setTodayHits)
                  }
                />
                {song.toggle && (
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <span className="w-1 h-3 bg-green-400 animate-pulse"></span>
                    <span className="w-1 h-5 bg-green-500 animate-bounce"></span>
                    <span className="w-1 h-4 bg-green-400 animate-pulse delay-200"></span>
                  </div>
                )}
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base truncate">{song.name}</h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 truncate">{song.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCharts;
