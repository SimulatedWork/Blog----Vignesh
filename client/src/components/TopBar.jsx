import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Cropped-logo.png";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { IoMdNotificationsOutline } from "react-icons/io";
import { UserLogout } from "../Redux/userSlice";

const TopBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = async (data) => {};

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 shadow-lg">
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 rounded text-white">
          <img src={Logo} alt="BloggyVerse" className="h-auto w-1/2"/>
        </div>
        {/* <span className="text-xl md:text-2xl text-black font-semibold">
          BLOGGYVERSE
        </span> */}
      </Link>
      <form
        className="hidden md:flex items-center justify-center"
        onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder="Search..."
          styles="w-[18rem] lg:w-[38rem] rounded-1-full py-3"
          register={register("search")}
        />
        <CustomButton
          title="Search"
          type="submit"
          containerStyles="bg-black text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </form>
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <div className="hidden lg:flex">
          <IoMdNotificationsOutline />
        </div>
        <div>
          <CustomButton
            onClick={() => dispatch(UserLogout())}
            title="Log Out"
            containerStyles="bg-black text-white text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
