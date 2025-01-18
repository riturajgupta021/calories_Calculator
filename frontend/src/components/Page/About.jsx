import React from 'react';
import Nav from './Nav';

function About() {
  return (
    <>
    <Nav/>
    <div className="min-h-screen  p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Calorie Management System</h1>
        <p className="text-lg text-white mt-2">
          To assist users in achieving and maintaining a healthy weight by providing insights into their nutritional habits.
        </p>
      </div>
      <div className="flex justify-center mb-8">
       
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Meet The Team</h2>
      <p className="text-center text-white mb-8 text-xl">
        Designed to help individuals track, manage, and monitor their daily caloric intake.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Team Member */}
        <div>
          <h3 className="font-bold text-white">Khush Desai</h3>
          <p className=" text-white mt-2 text-xl">
            I am a student currently pursuing B.Tech degree in Computer Science and Business Systems...
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">Deyasini Goswami</h3>
          <p className=" text-white mt-2 text-xl">
            A coding enthusiast, aspiring to contribute something significant to the world...
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">Sairantri Pathak</h3>
          <p className="text-xl text-white mt-2">
            An aspiring Software Developer. Passionate about crafting elegant code and problems...
          </p>
        </div>
       
      </div>
    </div>
    </>
  );
}

export default About;