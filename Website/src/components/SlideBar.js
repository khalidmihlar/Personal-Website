import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";

export default function Slidebar() {
  const [select, setSelect] = useState(0);
  return (
    <div className="flex-none  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div>
          <img
            src={require("../assets/images/MyImage.webp")}
            alt="Khalid Mihlar"
            className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]"
          />
          <h3 className="text-white name py-4 font-medium ">
            Khalid Mihlar
          </h3>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-red-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-red-600 " : ""
          }`}
          
        >
          <a href="/#">Home</a>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-red-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-red-600 " : ""
          }`}
        >
          <a href="#about"> About Me</a>
        </p>
        {/* <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-red-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-red-600 " : ""
          }`}
        >
          <a href="#resume">Resume</a>
        </p> */}
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-red-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-red-600 " : ""
          }`}
        >
          <a href="#projects">Projects</a>
        </p>
        <p
          onClick={() => setSelect(4)}
          className={`cursor-pointer hover:text-red-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 4 ? "text-red-600 " : ""
          }`}
        >
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
      >
        <div
          onClick={() =>
            window.open("https://github.com/khalidmihlar", "_blank")
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/kale_lid/", "_blank")
          }
        >
          {" "}
          <InstagramIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/khalid-mihlar-416462168/",
              "_blank"
            )
          }
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.facebook.com/khalidmihlar", "_blank")
          }
        >
          <FacebookIcon className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
