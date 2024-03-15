import React from 'react'
// icon
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

export default function CardKemampuan(props) {
  const stars = [];

  // Loop untuk membuat 5 bintang
  for (let i = 0; i < 5; i++) {
    if (i<props.star) {
      stars.push(<span className='text-yellow-400'><IoStar /></span>);
    }else{
      stars.push(<span><IoIosStarOutline /></span>);
    }
   
  }

  return (
    <div className='justify-center items-center flex flex-col gap-2'>
      <img src={props.link} alt="" className='h-12 md:h-24 shadow-lg'/>
      <h1 className='flex text-sm md:text-2xl'>{stars}</h1>
    </div>
  );
}
