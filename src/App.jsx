import React from "react";
import { entrepreneurialQualities } from "./SampleData.js";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center w-full mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center mx-auto">
      <img src="letsrise.png" alt="Logo" className="mr-2 img-center w-10" />Student Dashboard</h1>
      <div className="flex flex-col items-center md:items-start md:mr-8">
          <img
            src="My photo.jpg" // Replace with the student's image URL
            alt="Student"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <h2 className="text-xl font-semibold">Samiya Zubair</h2>
          <p className="text-white mb-5">Aspiring Entrepreneur</p>
      </div>
      <p className="text-white text-center mx-auto mb-5">
      Your journey starts here! Discover opportunities tailored to your entrepreneurial strengths. </p>
      <h2 className="text-l font-semibold mb-1">5 Recommended Roles: </h2>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
        {entrepreneurialQualities.map((role) => (
          <div
            key={role.id}
            className="bg-white shadow-md boarder border-black rounded-lg p-4 hover:shadow-lg transition text-center mx-auto"
          >
            <h2 className="text-xl font-semibold mx-auto">{role.title}</h2>
            <p className="text-white my-2 mx-auto">{role.description}</p>
            <button className="mt-auto bg-blue-500 apply px-4 py-2 rounded hover:bg-blue-600 mx-auto">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;