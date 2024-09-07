import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";

// const sansation = Sansation({ weight: ["400"], subsets: ["latin"] });
const Newsletter = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div
      style={{ backgroundImage: `url(/assets/newsletter-bg.png)` }}
      className="font-secular-one h-[400px] bg-cover bg-center my-3"
    >
      <div className="md:px-10 px-5 flex justify-center items-center flex-col w-full h-full bg-bgdark">
        <div className="bg-main-color gap-8 inline-flex flex-col items-center justify-center w-fit md:h-[250px] h-[200px] rounded-3xl p-10">
          <h2 className="text-white lg:text-3xl md:text-2xl text-sm text-center">
            SUBSCRIBE TO OUR
            <br /> NEWSLETTER TO GET UPDATES
          </h2>
          <div className="flex w-full max-w-md items-center p-1 border-2 border-primary rounded-[10px]">
            <span>
              <MdEmail className="text-primary lg:text-3xl text-2xl" />
            </span>
            <input
              type="email"
              placeholder="School Mail"
              className="bg-transparent p-1 placeholder:text-primary text-white w-full lg:text-2xl md:text-xl outline-none border-none"
              {...register("schoolMail", { required: true })}
            />
            <button className="md:text-2xl text-sm text-white p-1 rounded-md bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
