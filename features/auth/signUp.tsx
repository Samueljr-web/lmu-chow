"use client";
import Button from "@/components/ui/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdEmail, MdOutlineCancel, MdPerson } from "react-icons/md";

interface StudentData {
  firstName: string;
  lastName: string;
  schoolMail: string;
  matricNo: string;
}

function SignUp({ setIsSignUpOpen }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentData>();

  const submitHandler: SubmitHandler<StudentData> = (data: any) => {
    console.log(data);
  };

  const closeModal = () => {
    setIsSignUpOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-30">
      <div className="relative h-[500px] w-[450px] bg-no-repeat bg-cover rounded-[30px] bg-[url('/assets/bg-auth.png')] text-center">
        <div className="flex flex-col justify-center w-full h-full bg-bgdark rounded-[inherit]">
          <span
            onClick={closeModal}
            className="absolute cursor-pointer right-[-10px] top-[2.5rem] flex justify-items-end pr-10"
          >
            <MdOutlineCancel className="float-right text-[2.7rem] text-primary-fade" />
          </span>{" "}
          <span>
            <h2 className="text-main-color font-medium text-[40px]">Sign Up</h2>
            <h4 className="text-primary text-[28px]">Sign up to continue</h4>
          </span>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mt-3 flex flex-col items-center justify-center px-[4rem] space-y-5"
          >
            <div className="flex w-full max-w-md items-center  px-2 py-[0.3rem] border-[1.5px]  border-primary-fade rounded-[10px]">
              <span>
                <MdPerson className="text-primary-fade text-xl" />
              </span>
              <input
                type="text"
                placeholder="First name:"
                className="bg-transparent p-2 placeholder:text-primary-fade text-white w-full outline-none border-none"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="flex w-full max-w-md items-center  px-2 py-[0.3rem] border-[1.5px]  border-primary-fade rounded-[10px]">
              <span>
                <MdPerson className="text-primary-fade text-xl" />
              </span>
              <input
                type="text"
                placeholder="Last name:"
                className="bg-transparent p-2 placeholder:text-primary-fade text-white w-full outline-none border-none"
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="flex w-full max-w-md items-center  px-2 py-[0.3rem] border-[1.5px]  border-primary-fade rounded-[10px]">
              <span>
                <MdEmail className="text-primary-fade text-xl" />
              </span>
              <input
                type="email"
                placeholder="School mail:"
                className="bg-transparent p-2 placeholder:text-primary-fade text-white w-full outline-none border-none"
                {...register("schoolMail", { required: true })}
              />
            </div>
            <div className="flex w-full max-w-md items-center  px-2 py-[0.3rem] border-[1.5px]  border-primary-fade rounded-[10px]">
              <span className="text-xl text-primary-fade">#</span>
              <input
                type="text"
                placeholder="Matric number:"
                className="bg-transparent p-2 placeholder:text-primary-fade text-white w-full outline-none border-none"
                {...register("matricNo", { required: true })}
              />
            </div>

            <Button type="submit" w="11rem" p={"10px"} rounded={"20px"}>
              {" "}
              Sign Up
            </Button>
            <h2 className="text-main-color">
              Already have an account?{" "}
              <Link href={""} className="text-primary">
                Sign In
              </Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
