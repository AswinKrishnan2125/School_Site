import React from 'react';
import './Academics.css'
const Academics = () => {
  return (
    <div className="academics relative p-6 pt-3 bg-gray-100 ">
      {/* Curriculum Overview */}
      <section className="mb-8 relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Curriculum Overview</h2>
        <p className="text-lg text-gray-700">
          Our curriculum is designed to offer a comprehensive education from primary through senior secondary levels, preparing students for higher education and beyond.
        </p>
      </section>

      {/* Primary Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Primary (Grades 1-5)</h3>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="list-disc list-inside text-gray-700">
            <li>English</li>
            <li>Mathematics</li>
            <li>Arts</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Physical Education</li>
          </ul>
        </div>
      </section>

      {/* Secondary Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Secondary (Grades 6-10)</h3>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="list-disc list-inside text-gray-700">
            <li>English</li>
            <li>Mathematics</li>
            <li>Computer Science</li>
            <li>Physics</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Social Studies</li>
            <li>Physical Education</li>
            <li>Art</li>
          </ul>
        </div>
      </section>

      {/* Senior Secondary Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Senior Secondary Education</h3>

        {/* Science Stream */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Science Stream</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Advanced Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Environmental Science</li>
            <li>Elective Science Courses</li>
          </ul>
        </div>

        {/* Commerce Stream */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Commerce Stream</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Accounting</li>
            <li>Business Studies</li>
            <li>Economics</li>
            <li>Mathematics for Commerce</li>
            <li>Marketing</li>
            <li>Elective Commerce Courses</li>
          </ul>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Teaching Methodologies</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Interactive Lectures</li>
            <li>Project-Based Learning</li>
            <li>Group Discussions and Activities</li>
            <li>Hands-On Experiments</li>
            <li>Digital Tools and Resources</li>
          </ul>
        </div>
      </section>

      {/* Educational Resources */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Resources</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            Our educational resources include:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Digital Classsrooms</li>
            <li>Interact Learning Modules</li>
            <li>Online Educational platforms</li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Academics;
