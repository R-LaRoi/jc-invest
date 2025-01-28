'use client'

import Navbar from "./components/navbar";
import HeroLanding from "./pages/landing";


const heroVideo = "https://github.com/user-attachments/assets/98badbb6-8bd6-4009-aca4-9d218884d8fe"

// const navLinks = [
//   { text: "Link 1", href: "#" },
//   { text: "Link 2", href: "#" },
//   { text: "Link 3", href: "#" },
// ];


export default function Home() {
  return (
    <>

      <Navbar
      // brand="FlyonUI"
      // links={navLinks}
      // ctaText="Get started"
      // ctaHref="#"
      />
      <HeroLanding video={heroVideo} />
      <div>

      </div>
    </>

  );
}