import React from "react";
import logo from "../../assets/logo.png"; // Replace this with the actual path to your logo file
import Login from "../Login_signup/Login";
import Nav from "./Nav";

const FirstPage = () => {
  return (
    <>
    <Nav/>
    <div
      className="relative h-screen bg-cover bg-center"
      
    >

      {/* Main Content */}
      <div className="absolute top-1/4 left-4 sm:top-1/3 sm:left-20 text-white max-w-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Calorie Calculator System
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Your goals, minus your doubts
        </p>
        <p className="mt-4 text-lg sm:text-base font-dark leading-relaxed max-w-prose">
          The Calorie Calculator System is your ultimate tool to track, manage, and optimize your 
          daily calorie intake. Whether you aim to lose weight, gain muscle, or maintain a healthy 
          lifestyle, our system offers personalized recommendations tailored to your goals. Start 
          your journey toward better health today!
        </p>
      </div>
    </div>
    <Login/>
    </>
  );
};

export default FirstPage;
