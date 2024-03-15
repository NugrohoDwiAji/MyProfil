import React from "react";

export default function CardSekolah(props) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      <img src={props.link} alt="" className="h-24 md:h-28 shadow-xl" />
      <h1 className="text-xl font-semibold text-center md:text-2xl">{props.name}</h1>
      <h2 className="md:text-xl">{props.tahun}</h2>
    </div>
  );
}
