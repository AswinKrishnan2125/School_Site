import React from 'react';
import './Students.css';
const Students = () => {
  return (
    <div className="students p-6 bg-gray-100">
      {/* Life at Springdale */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Life at Springdale</h2>

        {/* Achievements */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement Cards */}
            <div className="bg-yellow-50 border-2 border-yellow-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.dais.edu.in/images/aneesh-kumar.jpg" 
                alt="John Smith Achievement"
                className="w-70 h-78 object-contain"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">John Smith</h4>
                <p className="text-gray-700">National Level Math Olympiad Winner</p>
              </div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/523067980/display_1500/stock-photo-girl-child-in-the-pool-with-the-champion-trophy-in-a-red-bathing-suit-sunglasses-hat-concept-of-523067980.jpg" // Replace with actual image
                alt="Sarah Lee Achievement"
                className="w-70 h-82 object-contain "
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sarah Lee</h4>
                <p className="text-gray-700">Gold Medalist in State Swimming Championship</p>
              </div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/2023-01/first-1.jpg?itok=IU8Z1b4R" // Replace with actual image
                alt="Tech Innovators Club Achievement"
                className="w-70 h-42 object-contain"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Tech Innovators Club</h4>
                <p className="text-gray-700">Winners of Inter-School Robotics Competition</p>
              </div>
            </div>
          </div>
        </div>
        {/* Extracurricular Activities */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*y5zltt_NqG9ID9WDT455pA.jpeg" // Replace with the actual path to your image
            alt="Extracurricular Activities"
            className="w-60 h-40 object-contain rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extracurricular Activities</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Music</li>
            <li>Dance</li>
            <li>Drama</li>
            <li>Art</li>
            <li>Sports</li>
            <li>Robotics</li>
            <li>Debate Club</li>
            <li>Science Club</li>
          </ul>
        </div>

        {/* Clubs and Societies */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <img
            src="https://blogs.cardiff.ac.uk/insiders/wp-content/uploads/sites/523/2018/08/society.jpg" // Replace with the actual path to your image
            alt="Extracurricular Activities"
            className="w-60 h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clubs and Societies</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Literary Society</li>
            <li>Environmental Club</li>
            <li>Astronomy Club</li>
            <li>Coding Club</li>
          </ul>
        </div>

        
        {/* Student Council */}
        <div className="bg-white shadow-lg rounded-lg p-6">
        <img
            src="https://spechyd.ac.in/wp-content/uploads/2022/12/logo-10.png" // Replace with the actual path to your image
            alt="Extracurricular Activities"
            className="w-60 h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student Council</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><span className="font-semibold text-blue-600">President:</span> Amy Parker, Grade 12</li>
            <li><span className="font-semibold text-blue-600">Vice President:</span> Rajiv Mehta, Grade 11</li>
            <li><span className="font-semibold text-blue-600">Secretary:</span> Lisa Wong, Grade 10</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Students;
