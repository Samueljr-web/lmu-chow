"use client";
import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdEmail, MdOutlineCancel } from "react-icons/md";

interface StudentData {
  email: string;
  matricNo: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentData>();

  const submitHandler: SubmitHandler<StudentData> = (data: any) => {
    console.log(data);
  };
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-[0.7]">
      <div className="relative h-[500px] w-[550px] bg-no-repeat bg-cover rounded-[30px] bg-[url('/assets/bg-auth.png')] text-center">
        <div className="flex flex-col justify-center gap-7 w-full h-full bg-bgdark rounded-[inherit]">
          <span className="absolute cursor-pointer right-[-10px] top-[4rem] flex justify-items-end pr-10">
            <MdOutlineCancel className="float-right text-[2.7rem] text-primary-fade" />
          </span>{" "}
          <span>
            {" "}
            <h2 className="text-main-color font-medium text-[40px]">Sign In</h2>
            <h4 className="text-primary text-[28px]">Sign in to continue</h4>
          </span>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col items-center justify-center px-1 gap-10"
          >
            <div className="flex flex-col w-full  px-[3rem] gap-5">
              <div className="flex w-full max-w-md items-center px-2 py-[0.3rem] border-[1.5px] border-primary-fade rounded-[10px]">
                <span>
                  <MdEmail className="text-primary-fade text-xl" />
                </span>
                <input
                  type="email"
                  placeholder="School mail:"
                  className="bg-transparent p-2 placeholder:text-primary-fade text-primary-fade w-full outline-none border-none"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex w-full max-w-md items-center px-2 py-[0.3rem] border-[1.5px] border-primary-fade rounded-[10px]">
                <span className="text-xl text-primary-fade">#</span>
                <input
                  type="text"
                  placeholder="Matric number:"
                  className="bg-transparent p-2 placeholder:text-primary-fade text-primary-fade w-full outline-none border-none"
                  {...register("matricNo", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Button type="submit" w="11rem" p={"10px"} rounded={"20px"}>
                {" "}
                Sign In
              </Button>
              <h2 className="text-main-color text-center">
                New to LMU CHOW?{" "}
                <Link href={""} className="text-primary">
                  Sign Up
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
