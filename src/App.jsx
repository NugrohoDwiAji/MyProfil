import React from "react";
import { Helmet } from "react-helmet";

// component
import CardSekolah from "./component/CardSekolah";
import CardKemampuan from "./component/CardKemampuan";
import CardGalery from "./component/CardGalery";

// Data
import dataSekolah from "./data/dataSekolah.json";
import dataKemampuan from "./data/dataKemampuan.json";
import dataPengalaman from "./data/dataPengalalman.json";

// icon
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiTelegramLogo } from "react-icons/pi";
import { PiCopyrightLight } from "react-icons/pi";

export default function App() {
  return (
    <div>
      <Helmet>
        <title>NugrohoDwiAji</title>
      </Helmet>
      {/* Foto */}
      <div className="mt-16 bg-[#11E5BB] bg-opacity-30 w-full h-80 md:h-[24rem] flex flex-col justify-center items-center " name="home">
        <img
          src="./profil.jpeg"
          alt=""
          className=" h-52 w-52 md:h-64 md:w-64 rounded-full shadow-2xl"
        />
        <h1 className="text-2xl md:text-4xl font-semibold">Nugroho Dwi Aji</h1>
        <h2 className="md:text-2xl">Mahasiswa</h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#11E5BB"
          fill-opacity="0.3"
          d="M0,256L20,218.7C40,181,80,107,120,101.3C160,96,200,160,240,202.7C280,245,320,267,360,229.3C400,192,440,96,480,85.3C520,75,560,149,600,170.7C640,192,680,160,720,138.7C760,117,800,107,840,96C880,85,920,75,960,101.3C1000,128,1040,192,1080,186.7C1120,181,1160,107,1200,90.7C1240,75,1280,117,1320,165.3C1360,213,1400,267,1420,293.3L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
      {/* About me */}
      <div className="flex flex-col items-center w-full px-5 h-52 md:h-60" name="aboutMe">
        <h1 className="text-xl md:text-3xl font-semibold">About me</h1>
        <p className="text-center mt-5 md:text-2xl ">
          Memiliki Minat Pada Bidang Teknologi (Jaringan Maupun Web
          Development). Merupakan Individu Yang Sehat Dan Pribadi Yang Aktif
          Berorganisasi Bidang Teknologi.Saya tinggal di Dusun Jambianom, Desa
          Medana, Kec.Tanjung Kab.Lombok Utara NTB
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#11E5BB"
          fill-opacity="0.3"
          d="M0,288L20,240C40,192,80,96,120,64C160,32,200,64,240,74.7C280,85,320,75,360,90.7C400,107,440,149,480,149.3C520,149,560,107,600,96C640,85,680,107,720,138.7C760,171,800,213,840,208C880,203,920,149,960,149.3C1000,149,1040,203,1080,218.7C1120,235,1160,213,1200,181.3C1240,149,1280,107,1320,117.3C1360,128,1400,192,1420,224L1440,256L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      {/* Pengalaman */}
      <div className="w-full  bg-[#11E5BB] bg-opacity-30 flex flex-col items-center px-5" name="pengalaman">
        <h1 className="text-xl md:text-3xl font-semibold mb-5">Pengalaman</h1>
        <div className="md:text-2xl grid grid-cols-2 gap-4">
          <h1 className=" font-semibold">Devisi Inforkom</h1>
          <p>
            Information Technology Student Group <br />
            Ini adala Himpunan mahasis teknologi informasi Universitas Bumigora
          </p>
          <h1 className="font-semibold">Coder</h1>
          <p>
            Brida School Academy NTB <br />
            Ini Adalah Bootcamp Yang Di Adakan Oleh Brida NTB, Di Sana Saya
            Sebagai Peserta Yang Mendalami Bidang Tech
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#11E5BB"
          fill-opacity="0.3"
          d="M0,256L20,218.7C40,181,80,107,120,101.3C160,96,200,160,240,202.7C280,245,320,267,360,229.3C400,192,440,96,480,85.3C520,75,560,149,600,170.7C640,192,680,160,720,138.7C760,117,800,107,840,96C880,85,920,75,960,101.3C1000,128,1040,192,1080,186.7C1120,181,1160,107,1200,90.7C1240,75,1280,117,1320,165.3C1360,213,1400,267,1420,293.3L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
      {/* Riwayat Sekolah */}
      <div className="flex flex-col items-center" name="riwayatSekolah">
        <h1 className="text-xl font-semibold mb-5 md:text-3xl md:mb-10">Riwayat Sekolah</h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {dataSekolah.map((index) => (
            <div>
              <CardSekolah
                link={index.link}
                name={index.name}
                tahun={index.tahun}
              />
            </div>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#11E5BB"
          fill-opacity="0.3"
          d="M0,288L20,240C40,192,80,96,120,64C160,32,200,64,240,74.7C280,85,320,75,360,90.7C400,107,440,149,480,149.3C520,149,560,107,600,96C640,85,680,107,720,138.7C760,171,800,213,840,208C880,203,920,149,960,149.3C1000,149,1040,203,1080,218.7C1120,235,1160,213,1200,181.3C1240,149,1280,107,1320,117.3C1360,128,1400,192,1420,224L1440,256L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      {/* Kemampuan & Keahlian */}
      <div className="bg-[#11E5BB] w-full bg-opacity-30 flex flex-col items-center" name="kemampuan">
        <h1 className="text-xl font-semibold mb-5 md:text-3xl">Kemampuan & Keahlian</h1>
        <div className=" grid grid-cols-4 gap-5 p-5 justify-items-stretch">
          {dataKemampuan.map((item) => (
            <CardKemampuan link={item.link} star={item.tingkat} />
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#11E5BB"
          fill-opacity="0.3"
          d="M0,256L20,218.7C40,181,80,107,120,101.3C160,96,200,160,240,202.7C280,245,320,267,360,229.3C400,192,440,96,480,85.3C520,75,560,149,600,170.7C640,192,680,160,720,138.7C760,117,800,107,840,96C880,85,920,75,960,101.3C1000,128,1040,192,1080,186.7C1120,181,1160,107,1200,90.7C1240,75,1280,117,1320,165.3C1360,213,1400,267,1420,293.3L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
      {/* Galery */}
      <div className="flex flex-col items-center w-full mb-10" name="galery" >
        <h1 className="text-xl font-semibold mb-5 md:text-3xl">Galery</h1>
        <div className="grid grid-cols-2 gap-5 md:gap-20">
          {dataPengalaman.map((item) => (
            <CardGalery img={item.img} desc={item.desc} />
          ))}
        </div>
      </div>
      {/* footer */}
      <hr className="bg-[#11E5BB] h-2" />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 md:gap-x-32">
          <a href="https://www.instagram.com/nugrohodwiaji_/" className="flex items-center">
            <div className="text-2xl">
              <FaInstagram />
            </div>
            <h1>nugohodwiaji_</h1>
          </a>
          <a href="mailto:nugrohodwiaji@gmail.com" className="flex items-center">
            <div className="text-2xl">
            <MdOutlineMailOutline />
            </div>
            <h1 className="text-sm">nugrohodwiaji@gmail.com</h1>
          </a>
          <a href="https://www.linkedin.com/in/nugroho-dwi-aji-aa61a72a0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpvnXcTQ0RYuqtRCEDu1A%2Fg%3D%3D" className="flex items-center">
            <div className="text-2xl">
              <AiOutlineLinkedin />
            </div>
            <h1>Nugroho Dwi Aji</h1>
          </a>
          <a href="https://t.me/nugrohodwiaji" className="flex items-center">
            <div className="text-2xl">
            <PiTelegramLogo />
            </div>
            <h1 className="">@nugohodwiaji</h1>
          </a>
        </div>
        <h1 className="flex items-center mt-3 text-sm">Copyright  <PiCopyrightLight />   2024, All Rights Reserved </h1>
      </div>
    </div>
  );
}
