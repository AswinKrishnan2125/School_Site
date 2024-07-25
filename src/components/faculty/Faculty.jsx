import React from 'react';
import './Faculty.css'
const Faculty = () => {
  const facultyProfiles = [
    {
      name: 'John Doe',
      position: 'Principal',
      qualifications: 'M.Ed',
      experience: '20 years of experience in educational administration',
    },
    {
      name: 'Jane Smith',
      position: 'Vice Principal',
      qualifications: 'M.Sc. in Physics',
      experience: '15 years of teaching experience',
    },
    {
      name: 'Emily Johnson',
      position: 'English Teacher',
      qualifications: 'M.A. in English',
      experience: '10 years of teaching experience',
    },
    {
      name: 'Michael Brown',
      position: 'Mathematics Teacher',
      qualifications: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience',
    },
    {
      name: 'Sophia Davis',
      position: 'Science Teacher',
      qualifications: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience',
    },
    {
      name: 'David Wilson',
      position: 'Computer Science Teacher',
      qualifications: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience',
    },
  ];

  return (
    <div className="faculty p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Faculty Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyProfiles.map((faculty, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faculty.name}</h3>
              <h4 className="text-lg font-medium text-gray-600 mb-2">{faculty.position}</h4>
              <p className="text-gray-700 mb-2"><strong>Qualifications:</strong> {faculty.qualifications}</p>
              <p className="text-gray-700"><strong>Experience:</strong> {faculty.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
