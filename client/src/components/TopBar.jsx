import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const TopBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 shadow-lg">
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 rounded text-white"></div>
        <span className="text-xl md:text-2xl text-black font-semibold">
          BLOGGYVERSE
        </span>
      </Link>
    </div>
  );
};

export default TopBar;
