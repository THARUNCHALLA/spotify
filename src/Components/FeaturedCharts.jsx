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
    <div className="flex-1 p-6">
      <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-6 text-white">Featured Charts</h3>
      <div className="flex flex-row gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth px-2 lg:px-4">
        {albumsData.map((album) => (
          <div
            key={album.id}
            className="flex flex-col lg:rounded-xl p-4 sm:p-5 hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
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

      <h3 className="text-lg lg:text-2xl font-bold mb-6 text-white mt-4 lg:mt-8">NTR Biggest Hits</h3>
      <div className="flex flex-row gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth px-2 lg:px-4 mt-4 lg:mt-8">
        {ntrSongs.map((song) => (
          <div
            key={song.id}
            className="flex flex-col lg:rounded-xl p-4 sm:p-5 hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
          >
            <div className="relative">
              <img
                src={song.image}
                alt={song.name}
                className="h-[120px] lg:w-40 lg:h-40 object-cover mb-2 sm:mb-4 rounded-xl"
              />
              {song.toggle ? (
                <img
                  src={assets.pause_icon}
                  alt="Pause"
                  className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => stopSong(song, ntrSongs, setNtrSongs)}
                />
              ) : (
                <img
                  src={assets.play_icon}
                  alt="Play"
                  className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => playSong(song, ntrSongs, setNtrSongs)}
                />
              )}
            </div>
            <h4 className="text-white font-semibold text-sm sm:text-base truncate">{song.name}</h4>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 truncate">{song.desc}</p>
          </div>
        ))}
      </div>
      <h3 className="text-lg lg:text-2xl font-bold mb-6 text-white mt-4 lg:mt-8">Today's biggest hits</h3>
      <div className="flex flex-row gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth px-2 lg:px-4 mt-4 lg:mt-8">
        {todayHits.map((song) => (
          <div
            key={song.id}
            className="flex flex-col lg:rounded-xl p-4 sm:p-5 hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
          >
            <div className="relative">
              <img
                src={song.image}
                alt={song.name}
                className="h-[120px] lg:w-40 lg:h-40 object-cover mb-2 sm:mb-4 rounded-xl"
              />
              {song.toggle ? (
                <img
                  src={assets.pause_icon}
                  alt="Pause"
                  className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => stopSong(song, todayHits, setTodayHits)}
                />
              ) : (
                <img
                  src={assets.play_icon}
                  alt="Play"
                  className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => playSong(song, todayHits, setTodayHits)}
                />
              )}
            </div>
            <h4 className="text-white font-semibold text-sm sm:text-base truncate">{song.name}</h4>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 truncate">{song.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharts;
