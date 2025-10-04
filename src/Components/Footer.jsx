import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "./redux"; 

const Footer = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.playlist.currentSong);
  console.log(currentSong);

  if (!currentSong) return null;

  const handleSongEnd = () => {
    dispatch(setCurrentSong(null));
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="w-full bg-[#181818] shadow-lg h-20 flex items-center px-4">
        <div className="flex items-center gap-3 w-[300px] lg:block hidden">
          <img
            src={currentSong.image}
            alt={currentSong.name}
            className="w-12 h-12 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-white text-sm">
              {currentSong.name}
            </span>
            <span className="text-gray-400 text-xs">{currentSong.desc}</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <AudioPlayer
            autoPlay
            src={currentSong.file}
            showJumpControls={false}
            customAdditionalControls={[]}
            layout="horizontal"
            className="bg-black w-full max-w-[400px]"
            onPlay={() => console.log("Playing:", currentSong.name)}
            onEnded={handleSongEnd}
            showSkipControls={true}
            showFilledProgress={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
