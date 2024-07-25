import React from 'react';
import './About.css';

function OrganizationInfo() {
  return (
    <div className="container mx-auto p-4 mt-4 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* History */}
        <div className="about-data p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-black-600">Our History</h2>
          <p className="text-gray-700">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students</p>
        </div>

        {/* Vision */}
        <div className="about-data p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-black-600">Our Vision</h2>
          <p className="text-gray-700">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>

        {/* Mission */}
        <div className="about-data p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-black-600">Our Mission</h2>
          <p className="text-gray-700">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world</p>
        </div>
      </div>
        <div className="principal p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-black-600">Message From Principal</h2>
          <p className="text-gray-700 text-2xl ">
          "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."</p>
        </div>
        <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-black-600">Infrastructure and Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Science and Computer Labs */}
          <div className="facility-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://img.freepik.com/premium-photo/futuristic-science-lab-background_776674-12639.jpg" alt="Science Lab" className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">State-of-the-art science and computer labs</h3>
          </div>
          {/* Classrooms */}
          <div className="facility-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://img.freepik.com/premium-photo/experience-essence-education-this-wellequipped-classroom-wooden-furniture-blackboard-bright-atmosphere-set-stage-knowledge-growth_875722-37068.jpg" alt="Classroom" className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Spacious and well-equipped classrooms</h3>
          </div>
          {/* Library */}
          <div className="facility-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/07/25115637/250717_Library%40Home.jpg" alt="Library" className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Library with a vast collection of books and digital resources</h3>
          </div>
          {/* Sports Facilities */}
          <div className="facility-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://spaces4learning.com/-/media/EDU/SPM/Images/2019/10/SportsFacilities01x640.jpg" alt="Sports Facility" className="rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Sports facilities including a playground, gymnasium, and swimming pool</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationInfo;
