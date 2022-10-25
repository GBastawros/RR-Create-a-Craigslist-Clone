import React from 'react';
import {postings} from './postings'

function Gallery() {
  postings.map((data, i) => {
    return <posting data={data} key={i} />
  })
  
  return (
    <>
      <h1>Gallery</h1>
      <postings/>
      
    </>
  )
}

export default Gallery;