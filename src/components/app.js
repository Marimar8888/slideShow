import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";



const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1023/1000/600/",
    thumbnail: "https://picsum.photos/id/1023/250/150/",
  },
];


export default class App extends Component {

  render() {
  
    return (
      <ImageGallery
      items={images}
      showPlayButton = {false}
      showThumbnails = {false}
      showFullscreenButton= {false}
      autoPlay = {true}
      showBullets = {true}
      slideInterval={3000}
      renderItem={(item) => (
        <div style={{ width: '80vw', height: '400px', margin: 'auto' }}>
          <img
            src={item.original}
            alt={item.originalAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
       />
    )}
}

