"use client"

import Image from 'next/image';
import logo from '../assets/images/2.png'
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
            typeof='video/mp4'
          >

          </video>

          <div className='overlay'>
            <div className="div-block ">
              <Image
                src={logo}
                alt=""
                className='image-logo'
                width={358}

              // sizes="(max-width: 479px) 51vw, 13vw"
              />
              <p className="sub-text">
                At Joy Cole Property Investments, we see opportunities. Every property is a strategic stepping stone to your financial dreams, carefully curated to align with your unique investment goals.
                <br />  <br />
                <a href="#" className="button-primary">
                  Connect with us!
                </a>
              </p>

            </div>

          </div>
        </div>
        <div>
        </div>


      </div>
    </div >
  );
}
