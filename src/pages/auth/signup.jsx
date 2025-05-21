import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  const renderInput = (name, placeholder, type = "text") => (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      register={register}
      error={errors[name] && "This field is required"}
    />
  );

  return (
    <div className="flex items-center justify-center min-h-screen font-[Poppins] bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md login-box">
        <div
          style={{
            paddingBottom: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Signup as</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <select className="select p-2 w-full border-2 border-gray-300 rounded mb-4 text-base">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <h2 className="text-xl font-semibold mb-4">Student Details:</h2>
          {renderInput("student_id", "Student ID")}
          {renderInput("admission_no", "Admission No")}
          {renderInput("roll_no", "Roll No")}
          {renderInput("student_name", "Student Name")}
          {renderInput("admission_number", "Admission Number")}
          {renderInput("university_reg_no", "University Registration No")}
          {renderInput("department", "Department")}
          {renderInput("batch", "Batch")}

          <h2 className="text-xl font-semibold mt-6 mb-4">Contact Details:</h2>
          {renderInput("primary_email_id", "Primary Email ID", "email")}
          {renderInput("student_phone", "Student Phone")}
          {renderInput("parent_phone", "Parent Phone")}

          <h2 className="text-xl font-semibold mt-6 mb-4">Personal Details:</h2>
          {renderInput("gender", "Gender")}
          {renderInput("date_of_birth", "Date of Birth", "date")}
          {renderInput("birth_place", "Birth Place")}
          {renderInput("state", "State")}
          {renderInput("admission_date", "Admission Date", "date")}
          {renderInput("current_address", "Current Address")}
          {renderInput("permanent_address", "Permanent Address")}
          {renderInput("religion", "Religion")}
          {renderInput("caste", "Caste")}

          <h2 className="text-xl font-semibold mt-6 mb-4">Password:</h2>
          {renderInput("password", "Password", "password")}

          <input
            type="submit"
            value="Signup"
            className="w-full bg-black text-white py-2 rounded text-base mt-4 cursor-pointer hover:bg-gray-700"
          />

          <h3 className="text-center mt-4">Already have an account?</h3>
          <button className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2">
            <a href={"/login"}>Login</a>
          </button>
        </form>
      </div>
    </div>
  );
}
