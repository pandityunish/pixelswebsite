// 'use client';

// import React, { useEffect, useState } from 'react';
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// const StaggeredGridView = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchedItems = [
//       { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
//       { src: 'https://images.unsplash.com/photo-1622279486466-e0e3bfdd0a01?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
//       { src: 'https://images.unsplash.com/photo-1566731372839-859e7cead0ef?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
//       { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D', alt: 'Image 4' },
//       { src: 'https://images.unsplash.com/photo-1632540118353-dccde2115d2f?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
//       { src: 'https://images.unsplash.com/photo-1722159375321-048d8556dd94?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
//       { src: 'https://images.unsplash.com/photo-1721915421716-a2d0da988420?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
//       { src: 'https://images.unsplash.com/photo-1632540118353-dccde2115d2f?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
//       { src: 'https://images.unsplash.com/photo-1722159375321-048d8556dd94?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
//       { src: 'https://images.unsplash.com/photo-1721915421716-a2d0da988420?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
//     ];
//     setItems(fetchedItems);
//   }, []);

//   return (
//    <>
//    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center  justify-center'>

  
//         {items.map((item, i) => (
//           <div key={i} className='lg:h-[200px] w-[300px] px-3 py-5 mt-4' >
//             <img src={item.src} alt={item.alt}  />
//           </div>
//         ))}
//          </div>
//     </>
//   );
// };

// export default StaggeredGridView;
'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const StaggeredGridView = () => {
  const [items, setItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('http://localhost:5001/pictures');
        setPictures(response.data);
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
    setIsMounted(true);

  }, []);
  useEffect(() => {
    const fetchedItems = [
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
      { src: 'https://images.unsplash.com/photo-1622279486466-e0e3bfdd0a01?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
      { src: 'https://images.unsplash.com/photo-1566731372839-859e7cead0ef?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
      { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D', alt: 'Image 4' },
      { src: 'https://images.unsplash.com/photo-1632540118353-dccde2115d2f?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
      { src: 'https://images.unsplash.com/photo-1722159375321-048d8556dd94?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
      { src: 'https://images.unsplash.com/photo-1721915421716-a2d0da988420?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
    ];
    setItems(fetchedItems);
  }, []);

  if (!isMounted) return <div>Loading...</div>;

  return (
   <div className='p-20'>
     <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry gutter="10px">
        {pictures.map((item, i) => (
          <img
            key={i}
            src={item.imageUrl}
            alt={item.name}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
   </div>
  );
};

export default StaggeredGridView;
