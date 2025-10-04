import { albumsData, songsData, assets } from "../assets/Data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "./redux"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const AlbumDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const album = albumsData.find((a) => a.id == id);
    const gradientStyle = {
        background: `linear-gradient(#121212, ${album.bgColor})`,
    };
    if (!album) return <p className="text-white p-6">Album not found</p>;

    const [data, setData] = useState(songsData);
    const playSong = (song) => {
        const updatedData = data.map((s) =>
            s.id === song.id ? { ...s, toggle: true } : { ...s, toggle: false }
        );
        console.log(updatedData, "updatedData");
        setData(updatedData);
        const data = {
            updateData: updatedList,
            song: song
        }
        dispatch(setCurrentSong(data));
    };
    const stopSong = (song) => {
        const updatedData = data.map((s) =>
            s.id === song.id ? { ...s, toggle: false } : { ...s, toggle: false }
        );
        setData(updatedData);
        dispatch(setCurrentSong(null));
    };
    return (
        <>
            <div style={gradientStyle} className="flex-1 h-screen p-6 overflow-y-scroll scrollbar-hide">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                        <img
                            src={album.image}
                            alt={album.name}
                            className="w-64 h-64 rounded-xl object-cover shadow-lg"
                        />
                    </div>
                    <div className="text-white md:flex-1">
                        <h2 className="text-4xl font-bold mb-2">{album.name}</h2>
                        <p className="text-gray-400 mb-4">{album.desc}</p>
                        <div className="flex gap-4">
                            <button className="bg-green-500 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
                                Play
                            </button>
                            <button className="border border-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Songs</h3>
                <table className="w-full text-left text-gray-300 mb-6">
                    <thead>
                        <tr className="border-b border-gray-700 group relative">
                            <th className="py-2 px-4">#</th>
                            <th className="py-2 px-4">Title</th>
                            <th className="py-2 px-4">Album</th>
                            <th className="py-2 px-4">Date Added</th>
                            <th className="py-2 px-4">
                                <img
                                    src={assets.clock_icon}
                                    alt="Duration"
                                    className="w-4 h-4 inline"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((song, index) => (
                            <tr key={song.id} className="hover:bg-gray-800 relative group cursor-pointer">
                                <td className="py-2 flex justify-center items-center relative mt-3">
                                    <span className="text-gray-400 group-hover:hidden">{song.id}</span>
                                    {song.toggle ?
                                        <img
                                            src={assets.pause_icon}
                                            alt="Pause"
                                            className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                            onClick={() => stopSong(song)}
                                        /> : <img
                                            src={assets.play_icon}
                                            alt="Play"
                                            className="absolute inset-0 m-auto w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                            onClick={() => playSong(song)}
                                        />}
                                </td>
                                <td className="py-2 px-4">
                                    <img src={song.image} alt={song.name} height={28} width={28} className="inline mr-4 rounded-md" />
                                    {song.name}</td>
                                <td className="py-2 px-4">{album.name}</td>
                                <td className="py-2 px-4">5 Days Ago</td>
                                <td className="py-2 px-4">{song.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AlbumDetails;
