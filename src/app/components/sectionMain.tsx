import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface TwoColumnSectionProps {

  imageSrc: string | StaticImageData;
  imageAlt: string;
  header: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}



export default function TwoColumnSection({
  imageSrc,
  imageAlt,
  header,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}: TwoColumnSectionProps): React.JSX.Element {
  return (
    <section className="container mx-auto  sm:px-6 lg:px-8 mt-20 py-15 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16  ">
      <div className="w-full md:w-1/2 max-w-md ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-lg space-y-8 p-8">
        <h2 className="text-5xl font-bold text-gray-600 text-left pb-2 border-b-[2px] border-[#8a95a4] w-[60%] inline-block">
          {header}
        </h2>
        <p className="text-m text-gray-600 leading-relaxed md:text-left">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 ">
          {primaryButtonText && (
            <button
              className="bg-[#8a95a4] text-white px-6 py-3  hover:bg-blue-600 transition w-full sm:w-auto"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </button>
          )}
          {secondaryButtonText && (
            <button
              className="border border-[#8a95a4] text-[#8a95a4] px-6 py-3 hover:bg-blue-50 transition w-full sm:w-auto"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>

  );
}


