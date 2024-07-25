import React from 'react';
import './Admission.css';
const Admission = () => {
  return (
    <div className="admission p-6 bg-gray-100 ">
      {/* Admission Process */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Admission Process</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          <a
            href="../../assets/Admission_Form.pdf"  // Replace with the actual path to your form
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Admission Form
          </a>
        </div>
      </section>
      {/* Admission Criteria */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Admission Criteria</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-700">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Important Dates</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="list-disc list-inside text-gray-700">
            <li className="text-lg mb-2">
              <span className="font-semibold text-blue-600">Admission Form Availability:</span> <span className="bg-yellow-200 px-2 rounded">March 1st</span>
            </li>
            <li className="text-lg mb-2">
              <span className="font-semibold text-blue-600">Last Date for Submission:</span> <span className="bg-yellow-200 px-2 rounded">March 31st</span>
            </li>
            <li className="text-lg mb-2">
              <span className="font-semibold text-blue-600">Entrance Test:</span> <span className="bg-yellow-200 px-2 rounded">April 15th</span>
            </li>
            <li className="text-lg mb-2">
              <span className="font-semibold text-blue-600">Announcement of Results:</span> <span className="bg-yellow-200 px-2 rounded">April 30th</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Admission;
