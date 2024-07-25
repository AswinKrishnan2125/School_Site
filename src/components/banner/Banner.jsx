// imgSrc: 'https://www.example.com/image1.jpg', // Replace with your image paths
// imgSrc: 'https://www.example.com/image2.jpg', // Replace with your image paths
// imgSrc: 'https://www.example.com/image3.jpg', // Replace with your image paths
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Banner.css';
const carouselItems = [
  {
    imgSrc: 'https://stjosephpashan.com/wp-content/uploads/photo-gallery/IMG-20221220-WA0051.jpg',
    heading: 'Annual Sports Day',
    description: 'Celebrating Excellence in Sports',
  },
  {
    imgSrc: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_419750259.JPG',
    heading: 'Science Exhibition',
    description: 'Showcasing Student Innovations',
  },
  {
    imgSrc: 'https://static2.tripoto.com/media/filter/tst/img/208459/TripDocument/1478504893_cover.jpg',
    heading: 'Cultural Fest',
    description: 'Embracing Diversity and Creativity',
  },
];

function Banner() {
  const settings = {
    dots: false, // No dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // No arrows for navigation
  };

  return (
    <div className="banner relative z-10">
      <div className="desc absolute top-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-black p-4 rounded-lg text-center w-4/5 z-10">
        <h2 className="text-2xl font-semibold">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h2>
      </div>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="banner-slide relative">
          <img src={item.imgSrc} alt={item.heading} className="banner-image w-full h-80 object-contain rounded-lg" />
          <div className="banner-content absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
            <p className="text-lg">{item.description}</p>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;