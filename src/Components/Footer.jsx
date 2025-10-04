import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "./redux";

const Footer = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.playlist.currentSong);
  const ListOfSongs = useSelector((state) => state.playlist.songs);

  if (!currentSong) return null;

  const handleSongEnd = () => {
    if (!ListOfSongs || ListOfSongs.length === 0) return;
    const currentIndex = ListOfSongs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % ListOfSongs.length;
    const nextSong = ListOfSongs[nextIndex];
    dispatch(setCurrentSong(nextSong));
  };

  return (
    <div className="fixed bottom-6 left-0 w-full z-50 bg-[#121212] shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between h-24 px-3 sm:px-6">
        <div className="flex items-center gap-3 w-full sm:w-1/3 mb-2 sm:mb-0">
          <img
            src={currentSong.image}
            alt={currentSong.name}
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md shadow-sm"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="font-semibold text-white text-sm truncate">{currentSong.name}</span>
            <span className="text-gray-400 text-xs truncate">{currentSong.desc}</span>
          </div>
        </div>

        <div className="flex-1 w-full sm:w-1/3">
          <AudioPlayer
            autoPlay
            src={currentSong.file}
            showJumpControls={false}
            customAdditionalControls={[]}
            layout="horizontal"
            className="bg-[#181818] rounded-xl shadow-md w-full"
            onPlay={() => console.log("Playing:", currentSong.name)}
            onEnded={handleSongEnd}
            showSkipControls={true}
            showFilledProgress={true}
          />
        </div>

        <div className="flex items-center gap-4 w-full sm:w-1/3 justify-end mt-2 sm:mt-0">
          <button className="text-gray-400 hover:text-white transition text-lg">❤</button>
          <button className="text-gray-400 hover:text-white transition text-lg">⋮</button>
        </div>

      </div>
    </div>
  );
};

export default Footer;
