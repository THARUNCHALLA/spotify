import Home from "./Home";
import Library from "./Library";

const Sidebar = () => {
  return (
    <div className="p-4 space-y-2">
      <Home />
      <Library />
    </div>
  );
};

export default Sidebar;
