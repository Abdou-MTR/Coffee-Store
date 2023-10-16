"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";

export default function HeroPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landingpage m-0 ">
      <Navbar />
      <div className="heropage row m-0 mt-1 p-1 p-md-4">
        <div className="col-12 col-md-6 firstpart order-2 order-md-1">
          <h1 className="animate__animated animate__tada">
            Sip into Perfection
          </h1>
          <h2 className=" mb-1 mb-md-3">Where Coffee Meets Artistry</h2>
          <p>
            At Coffee Store , we are passionate about bringing you the finest
            coffee experience. Our dedication to quality and taste is what sets
            us apart. Whether you're a coffee connoisseur or just looking for a
            great cup of joe, we've got you covered.
          </p>
          <div className="buttons p-lg-4">
            <button className="btni-full me-1 rounded-5">
              <Link href="/works" className=" fs-6 fa-bold">
                Order Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
