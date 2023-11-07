import { useSelector } from "react-redux";
import NoProfile from "../assets/NoProfile.png";
import { Loading, PostCard, ProfileCard, TextInput, TopBar } from "../components";
import { useForm } from "react-hook-form";
// import { BiImages } from "react-icons/bi";
import { useState } from "react";
import { posts } from "../assets/data";

const HomePage = () => {
  const { user } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },  
  } = useForm();
  const [errMsg, setErrMsg] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handlePostSubmit = async (data) => {};
  return (
    <div className="home w-full px-0 lg:px-10 pb-20 2xl:px-40 lg:rounded-lg h-screen overflow-hidden">
      <TopBar />
      <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full">
        {/* Left */}
        <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
          <ProfileCard user={user} />
        </div>
        {/* Center */}
        <div className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto shadow-lg rounded-lg">
          <form
            onSubmit={handleSubmit(handlePostSubmit)}
            className="px-4 rounded-lg"
          >
            <div className="w-full flex items-center gap-2 py-4 border-b border-black">
              <img
                src={user?.profileUrl ?? NoProfile}
                alt="User Image"
                className="w-14 h-14 rounded-full object-cover"
              />
              <TextInput
                styles="w-full rounded-full py-5"
                placeholder="What's on your mind... "
                name="description"
                register={register("description", {
                  required: "Write Something about post",
                })}
                error={errors.description ? errors.description.message : ""}
              />
            </div>
            {errMsg?.message && (
              <span
                role="alert"
                className={`text-sm ${
                  errMsg?.status === "failed" ? "red" : "green"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}
          </form>
          {loading ? (
            <Loading />
          ) : posts?.length > 0 ? (
            posts?.map((post) => {
              <PostCard
                key={post?._id}
                post={post}
                user={user}
                delete={() => {}}
                likePost={() => {}}
              />;
            })
          ) : (
            <div className="flex w-full h-full items-center justify-center">
              <p className="text-lg text-ascent-2">No Post Available</p>
            </div>
          )}
        </div>

        {/* Right */}
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
