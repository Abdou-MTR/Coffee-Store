"use client";
import React, { useState, useEffect } from "react";
import HeroPage from "@Components/landing";
import Menu from "@Components/menu";
import Adsection from "@Components/adsection";
import Contact from "@Components/contact";
import Footer from "@Components/footer";

export default function Home() {
   const [data, setData] = useState([]);

   const getData = async () => {
      try {
         const resp = await fetch("https://api.sampleapis.com/coffee/hot");
         const json = await resp.json();
         setData(json);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <main>
         <HeroPage />
         <Menu data={data} />
         <Adsection data={data} />
         <Contact />
         <Footer />
      </main>
   );
}
