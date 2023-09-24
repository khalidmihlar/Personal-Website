import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import animationData from "./working.json"; 

export default function About() {
  const getDate = () => {
    var dob = new Date("05/20/2001");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-red-600">Khalid Mihlar,</span> a Software
            Developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I am currently {getDate()}, 
            starting my coding journey in high school 
            and climing all the way to a Masters Program at UCSB. I am currently part of the Moment Lab at UCSB working on obtain new knowledge for the application of Wide-Area networks.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for either full-time or internship positions. I specialized my masters in Cloud/Network engineering. I have worked Fullstack positions, using tools such as reactJS, mySQL, and AWS. 
            I currently work at the Moment Lab at UCSB, where our current goal is pushing the development and research of Wide Area Networks. Some of my personal interests are going to Concerts,
            finding good food to eat, and traveling throughout America!
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            Please feel free to reach out to contact me for any possible opportunities. You can also find out more about me by downloading my resume or looking at some of my projects down below. I look forward to growing my career and becoming a better engineer every day! 
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              src="https://lottie.host/9cceaae8-898a-4b88-bfef-a93f3842b3cc/FycZ4CPZCF.json"
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-red-600 border-2 w-fit border-red-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-red-800 hover:scale-[1.023] focus:bg-red-800 animate-zoomy">
            <a
              href={require("../../assets/files/Khalid Resume.pdf")}
              download={"Khalid Mihlar's Resume.pdf"}
            >
              Download Resume
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
