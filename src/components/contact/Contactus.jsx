import React from 'react';
import Navbar from '../navbar/Navbar';
function ContactUs() {
  return (
      <div className="container mx-auto p-4 mt-4 md:mt-8">
        {/* <Navbar /> */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact Us</h2>
        
        <div className="mb-4">
          <p className="text-gray-700"><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="text-gray-700"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-gray-700"><strong>Email:</strong> info@springdale.edu</p>
        </div>
        
        <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4"></textarea>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-300" type="submit">Submit</button>
        </form>
        
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509295!2d144.953735315904!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f50142bfb2!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
