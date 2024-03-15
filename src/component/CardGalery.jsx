import React from "react";

export default function CardGalery(props) {
  return (
    <div className=" h-56 w-40 md:h-80 md:w-56 shadow-xl">
      <img src={props.img} alt="" className="w-full bg-red-400 h-[8rem] md:h-44 " />
      <p className="p-2 h-20 md:h-32 text-sm md:text-xl overflow-auto">{props.desc}</p>
    </div>
  );
}
