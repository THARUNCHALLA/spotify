import { assets } from "../assets/Data";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-between h-[56px] w-full px-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
                <button className="bg-black/40 rounded-full p-2 hover:bg-black/70 transition cursor-pointer" onClick={() => navigate(-1)}>
                    <img src={assets.arrow_left} alt="back" className="w-5 h-5" />
                </button>
                <button className="bg-black/40 rounded-full p-2 hover:bg-black/70 transition cursor-pointer" onClick={() => navigate(1)}>
                    <img src={assets.arrow_right} alt="forward" className="w-5 h-5" />
                </button>
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-white text-black font-semibold px-4 py-1 rounded-full hover:scale-105 transition">
                    Sign Up
                </button>
                <button className="bg-black text-white font-semibold px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-800 transition">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Header;
