'use client'

import Navbar from "./components/navbar";
import HeroLanding from "./pages/landing";
import TwoColumnSection from "./components/sectionMain";
import { Footer } from "./components/footer";
import image2 from './assets/images/property2.jpg'
import { profileSummary } from "./assets/text";
const heroVideo = "https://github.com/user-attachments/assets/98badbb6-8bd6-4009-aca4-9d218884d8fe"



export default function Home() {
  return (
    <>

      <Navbar

      />
      <HeroLanding video={heroVideo} />
      <div>
        <div>
          <TwoColumnSection
            imageSrc={image2}
            imageAlt="Investing In Your Future"
            header="Investing In Your Future"
            description={profileSummary}
            primaryButtonText="Learn More"
            secondaryButtonText="Get To Know Us"
            onPrimaryClick={() => console.log('Primary button clicked')}
            onSecondaryClick={() => console.log('Secondary button clicked')}
          />
        </div>
      </div>
      <Footer />
    </>

  );
}