import { Link } from "react-router-dom";
import Logo from "../assets/images/Bloggy-removebg-preview.png";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomButton, Loading } from "../components";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async(data) => {
    
  }

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-6 bg-grey">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl bg-grey ">
        {/* Left */}
        <div className="w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center bg-grey">
          <div className="w-full flex gap-2 items-center mb-6 bg-grey">
            {/* <div className="p-1 bg-grey rounded text-white bg-grey mr-4">
              <img src={Logo} alt="Logo" className="w-1/2 h-1/2 ml-36" />
              <span className="w-1/2 h-1/2 text-black">
                BLOGGY VERSE
              </span>
            </div> */}
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Login to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome Back!</span>
          <form className="py-8 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full rounded-full"
              labelStyles="ml-2"
              error={errors.email ? errors.email.message : ""}
            />
            <TextInput
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
              register={register("password", {
                required: "password is required",
              })}
              styles="w-full rounded-full"
              labelStyles="ml-2"
              error={errors.password ? errors.password.message : ""}
            />
            <Link
              to="/reset-password"
              className="text-sm text-right text-blue font-semibold"
            >
              Forgot Password ?
            </Link>

            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed" ? "text-red" : "text-green"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md bg-black px-8 py-3 text-sm font-medium text-white outline-none`}
                title="Login"
              />
            )}
          </form>
          <p className="text-ascent-2 text-sm text-center">
            Don't have an Account ?
            <Link
              to="/register"
              className="text-blue font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* Right */}
        <div>
          <img src={Logo} alt="Logo" className="h-1/2 mt-36 ml-24" />
        </div>
      </div>
    </div>
  );
};
