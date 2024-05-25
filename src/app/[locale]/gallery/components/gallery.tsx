'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

type Props = {}

function Gallery({}: Props) {
  const imageList = [
    'gallery2.jpeg',
    'gallery3.jpeg',
    'gallery4.jpeg',
    'gallery5.jpeg',
    'gallery6.jpeg',
    'gallery7.jpeg',
    'gallery8.jpeg',
    'gallery9.jpeg',
    'gallery10.jpeg',
    'gallery11.jpeg',
    'gallery12.jpeg',
  ]

  const galleryImages = imageList.map((fileName) => {
    return (
      <img
        key={fileName}
        loading="lazy"
        src={`/gallery/${fileName}`}
        alt=""
      />
    )
  })

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        {galleryImages}
      </Carousel>
    </div>
  )
}
export default Gallery
