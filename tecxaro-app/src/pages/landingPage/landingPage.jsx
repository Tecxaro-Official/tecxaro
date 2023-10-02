import "../../index.css"

// IMPORTING IMAGE 
import navbarImg from "../../assets/svg/navbarLogo.svg"
import downArrowHeroSection from "../../assets/svg/downarrow.svg"
import img1AboutSection from "../../assets/jpeg/aboutImag1.jpg"
// import img2AboutSection from "../../assets/jpeg/aboutPicture2.jpg"

const LandingPage = () => {
    return (
        <div className="bg-[#F7F7F7] text-[#363636]">







            {/* THE NAVIGATION BAR */}
            <nav className="navbar">

                <img className=" h-[1.5rem]" src={navbarImg} alt="" />
            </nav>





















            {/* HERO SECTION */}
            <div className=" w-[100%] h-[100svh] bg-[#F7F7F7] flex flex-col justify-center items-center px-[2rem]">








                <div className="flex flex-col">



                    {/* TECHXARO HERO SECTION MAIN */}
                    <div className="flex justify-center items-center">


                        <h1 className="heroMainTecAndAro font-mokoto text-[#FF3E1B] text-6xl
                        ">TEC</h1>



                        <h1 className=" font-bickubik text-[#2C2C2C] text-9xl relative left-1 heroMainX
                        ">X</h1>


                        <h1 className=" font-mokoto text-[#FF3E1B] text-6xl heroMainTecAndAro">ARO</h1>

                    </div>






                    {/* PRACTICAL TECHNICAL LEARNING */}
                    <div className="flex justify-center items-center font-bickubik text-sm relative bottom-5 right-1 text-[#2C2C2C] heroMainPracticalTechnicalLearning">


                        <p className=" mr-4
                        ">PRACTICAL</p>
                        <p className=" mr-4
                        ">TECHNICAL</p>
                        <p>LEARNING</p>

                    </div>
                </div>






                {/* THE DOWNARROW FLOATING */}
                <div className=" absolute bottom-4">
                    <img className=" h-[2rem]" src={downArrowHeroSection} alt="" />
                </div>

            </div>





















            {/* ================  THE ABOUT US SECTION STARTS =========== */}

            {/* ABOUT US SECTION */}
            <div className=" bg-[#F7F7F7] w-[100%] flex flex-col items-center py-12
             px-[2rem]">










                {/* THE DIV CONTAINING PICTURES FOR THE ABOUT US SECTION */}

                <div id="aboutUsPictures" className=" mb-2">


                    <div className=" p-3 pb-12 bg-white drop-shadow-lg">
                        <img src={img1AboutSection} alt="" />
                    </div>


                    {/* <div className="p-3 pb-12 bg-white drop-shadow-lg">
                        <img src={img2AboutSection} alt="" />
                    </div> */}

                </div>









                {/* THE DIV CONTAINING THE ABOUT US SECTION TEXT */}
                <div className="font-futura aboutUsSectionText">
                    <h1 className=" text-4xl font-black text-[#363636] my-6
                    ">ABOUT US</h1>

                    <p className=" text-xl "> tecXaro, a dynamic startup in the field of education technology, is committed to providing high-quality learning experiences in robotics and aerodynamics, with a specific emphasis on drones. Our team of passionate experts is dedicated to equipping learners of all backgrounds with valuable knowledge and practical skills. We offer hands-on courses designed to inspire innovation, promote sustainability, and foster a sense of community among our participants. Whether you are a student, educator, or an eager lifelong learner, tecXaro invites you to embark on an exciting educational journey with us as we work together to redefine the future of education in the realms of robotics and aerodynamics.</p>
                </div>

            </div>



















            {/*======================= PARALLAX SECTION ======================== */}

            {/* parallax starting section */}

            <div id="mainContainerForParralax">


                <div className=" bg-[#FF3E1B] w-[100%] h-[100svh] font-league flex justify-center items-center 
                ">

                    <h1 className="parallaxSection1Text">WHAT DO WE DO</h1>
                </div>
            </div>


            {/* INITIATIVES SECTION */}



            {/* TEAM SECTION */}



            {/* CONNECT WITH US SECTION */}
        </div>
    )
}

export default LandingPage