import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "./redux"
import { albumsData, songsData, assets } from "../assets/Data";
import { useNavigate } from "react-router-dom";

const FeaturedCharts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.playlist.currentSong);

  const [data, setData] = useState(
    songsData.map((song) => ({ ...song, toggle: false }))
  );

  const onNavigateToAlbum = (id) => {
    navigate(`/albums/${id}`);
  };

  const playSong = (song) => {
    const updatedData = data.map((s) =>
      s.id === song.id ? { ...s, toggle: true } : { ...s, toggle: false }
    );
    setData(updatedData);
    dispatch(setCurrentSong(song));
  };

  const stopSong = (song) => {
    const updatedData = data.map((s) =>
      s.id === song.id ? { ...s, toggle: false } : s
    );
    setData(updatedData);
    dispatch(setCurrentSong(null));
  };

  return (
    <div className="flex-1 p-6">
      <h3 className="text-2xl font-bold mb-6 text-white">Featured Charts</h3>

      {/* Albums */}
      <div className="flex flex-row gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth mx-4">
        {albumsData.map((album) => (
          <div
            key={album.id}
            className="flex flex-col rounded-xl p-5 hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group min-w-[180px]"
            onClick={() => onNavigateToAlbum(album.id)}
          >
            <img
              src={album.image}
              alt={album.name}
              className="w-40 h-40 object-cover mb-4 rounded-xl"
            />
            <h4 className="text-white font-semibold text-sm">{album.name}</h4>
            <p className="text-gray-300 text-xs mt-2">{album.desc}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-6 text-white mt-8">Today's biggest hits</h3>
      <div className="flex flex-row gap-6 overflow-x-scroll scrollbar-hide snap-x scroll-smooth mx-4">
        {data.map((song) => (
          <div
            key={song.id}
            className="flex flex-col rounded-xl p-4 min-w-[180px] hover:scale-105 transition-transform duration-300 snap-start group"
          >
            <div className="relative">
              <img
                src={song.image}
                alt={song.name}
                className="w-40 h-40 object-cover mb-4 rounded-xl"
              />

              {song.toggle ? (
                <img
                  src={assets.pause_icon}
                  alt="Pause"
                  className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => stopSong(song)}
                />
              ) : (
                <img
                  src={assets.play_icon}
                  alt="Play"
                  className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => playSong(song)}
                />
              )}
            </div>
            <h4 className="text-white font-semibold text-sm">{song.name}</h4>
            <p className="text-gray-300 text-xs mt-2">{song.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharts;
