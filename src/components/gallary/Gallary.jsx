import React from 'react';
import './Gallery.css';
function Gallery() {
  const images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynMIfGzWyP1mUR5NeUI5Oa8te_uRHInoi6w&s', alt: 'Students participating in various sports events.' },
    { src: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_419750259.JPG', alt: 'Students presenting their science projects.' },
    { src: 'https://static2.tripoto.com/media/filter/tst/img/208459/TripDocument/1478504893_cover.jpg', alt: 'Students performing in the cultural fest.' },
    { src: 'https://www.freep.com/gcdn/presto/2020/03/05/PDTF/55539c21-833f-46ef-a42d-8f7d02ba6d07-IMG_Free_Press_stock_sch_1_.JPG', alt: 'A glimpse of our interactive classrooms.' },
    { src: 'https://resource.rgu.ac/assets/images/resource/top-library-at-rgu.001.jpeg', alt: 'Students reading and studying in the school library.' },
  ];

  const videos = [
    { src: 'https://www.youtube.com/embed/Q3l7-DIrA8Y?si=fCikApVxLnHRUanF', alt: 'Virtual tour of Springdale Public School' },
    { src: 'https://www.youtube.com/embed/bfNydzlbMpU?si=50XJq2TMU7tmNdF1', alt: 'Highlights from the Annual Function 2023' },
  ];

  return (
    <div className="gallery container mx-auto pl-3 pr-3 ">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
            
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-8 mb-8">Videos</h2>

      <div className="flex flex-wrap gap-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <iframe width="400" height="315" src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;   
 gyroscope; picture-in-picture; web-share"   
 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
