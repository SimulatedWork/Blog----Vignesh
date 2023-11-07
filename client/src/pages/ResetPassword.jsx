import { useForm } from "react-hook-form";
import { useState } from "react";
import { CustomButton, Loading, TextInput } from "../components";

const ResetPassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};

  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-1/3 2xl:w-1/4 px-6 py-8 shadow-lg rounded-lg">
        <p className="text-ascent-1 text-lg font-semibold">Email Address</p>
        <span className="text-sm text-ascent-2">
          Enter Email Address you entered during registration
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-4 flex flex-col gap-5"
        >
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
              title="Send"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
