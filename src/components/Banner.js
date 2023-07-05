import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img loading='lazy' src="https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg" alt="" />
            </div>
            
            <div>
                <img loading='lazy' src="https://i.pinimg.com/originals/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg" alt="" />
            </div>

            <div>
                <img loading='lazy' src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/ecommerce-vs-online-marketplace1603983748724190.jpg" alt="" />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner