'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

type Props = {}

function Gallery({}: Props) {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery2.jpeg"
            alt=""
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery3.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery4.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery5.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery6.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery7.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery8.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery9.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery10.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery11.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/gallery/gallery12.jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  )
}
export default Gallery
