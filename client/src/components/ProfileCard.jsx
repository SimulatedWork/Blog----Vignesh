import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoProfile from "../assets/NoProfile.png";
import { updateProfile } from "../Redux/userSlice";
import { LiaEditSolid } from "react-icons/lia";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import moment from "moment";

const ProfileCard = ({ user }) => {
  const { user: data, edit } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-full flex flex-col items-center shadow-lg rounded-xl px-6 py-4">
        <div className="w-full flex items-center justify-between border-b pb-5">
          <Link to={"/profile/" + user?._id} className="flex gap-2">
            <img
              src={user?.profileUrl ?? NoProfile}
              alt={user?.email}
              className="w-14 h-14 object-cover rounded-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium text-ascent-1">
                {user?.firstName}
                {user?.lastName}
              </p>
              <span></span>
            </div>
          </Link>
          <div className="">
            {user?._id === data?._id ? (
              <LiaEditSolid
                size={22}
                className="text-black cursor-pointer"
                onClick={() => dispatch(updateProfile(true))}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-black">
          <div className="flex items-center justify-between">
            <span className="text-ascent-2 text-sm">Joined</span>
            <span className="text-ascent-1 text-base">
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 py-4 pb-6">
          <p className="text-ascent-1 text-lg font-semibold">Social Profiles</p>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsInstagram className="text-xl text-ascent-1" />
            <span className="text-sm">Instagram</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaTwitterSquare className="text-xl text-ascent-1" />
            <span className="text-sm">Twitter</span>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsFacebook className="text-xl text-ascent-1" />
            <span className="text-sm">Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
