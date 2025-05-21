import React, { useState } from "react";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const images = {
    customerImage: "/images/customer.png",
    managerImage: "/images/manager.png",
    adminImage: "/images/admin.png",
  };

  const [userType, setUserType] = useState("customer");

  const updateImage = (type) => {
    setUserType(type);
  };

  const onSubmit = (data) => {
    console.log({ ...data, userType });
  };

  return (
    <div className="login-box">
      <div
        style={{
          paddingBottom: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Login as</p>
        <img
          id="user-image"
          src={images[`${userType}Image`] || "../images/placeholder.png"}
          alt="User Image"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          className="select p-2 w-full border-2 border-gray-300 rounded mb-4 text-base"
          onChange={(e) => updateImage(e.target.value)}
          {...register("userType")}
        >
          <option value="customer">Customer</option>
          <option value="manager">Canteen Manager</option>
          <option value="admin">Admin</option>
        </select>

        <Input
          name="username"
          placeholder="Username"
          register={register}
          error={errors.username && "Username is required"}
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          register={register}
          error={errors.password && "Password is required"}
        />

        <input
          type="submit"
          value="Login"
          className="w-full bg-black text-white py-2 rounded text-base mt-4 cursor-pointer hover:bg-gray-700"
        />

        <h3 className="text-center mt-4">Don't have an account?</h3>
        <button className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2">
          <a href={"/signup"}>Signup</a>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
