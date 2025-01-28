"use client"


import { useEffect, useRef } from 'react';

type HeroProps = {
  video: string;
}


export default function HeroLanding({ video }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Error playing video:", error));
    }
  }, []);


  return (


    <div className="hero-landing">
      <div className='hero-video'>

        <div className="background-video">
          <video src={video}
            autoPlay
            muted
            loop
            playsInline
            typeof='video/mp4'
          >

          </video>

          <div className='overlay'>
            <div className="">
              <div className="container mx-auto px-4">
                <p className="
    absolute 
    text-sm md:text-base lg:text-lg 
    text-white
    w-full md:w-auto md:max-w-md
    left-1/2 md:left-auto
    transform -translate-x-1/2 md:translate-x-0
    top-20 md:top-40 md:right-8
    text-center md:text-left
    px-4 md:px-0
  ">
                  At Joy Cole Property Investments, we see opportunities. Every property is a strategic stepping stone to your financial dreams, carefully curated to align with your unique investment goals.
                </p>
              </div>



            </div>

          </div>
        </div>


      </div>

    </div>






  );
}
