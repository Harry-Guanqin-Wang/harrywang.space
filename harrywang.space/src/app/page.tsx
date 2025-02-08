"use client";  // this is added for the typewriter, remove this later

import NavBar from "@/components/layout/NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <Typewriter
          words={["Hello", "World"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </main>
  );
}
