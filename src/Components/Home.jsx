import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const menuItems = [
  { icon: IoHomeOutline, label: "Home" },
  { icon: CiSearch, label: "Search" },
];

const Home = () => {
  return (
    <div className="bg-[#121212] w-full p-4">
      {menuItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx}  className="flex items-center text-sm font-bold space-x-3 text-gray-300 hover:text-white cursor-pointer p-2 rounded-md hover:bg-[#1a1a1a]">
            <Icon className="text-white" size={20} />
           <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
