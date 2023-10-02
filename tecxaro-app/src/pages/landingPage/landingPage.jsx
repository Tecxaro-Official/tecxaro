import "../../index.css"

// IMPORTING IMAGE 
import navbarImg from "../../assets/svg/navbarLogo.svg"
import downArrowHeroSection from "../../assets/svg/downarrow.svg"

const LandingPage = () => {
    return (
        <div className="px-[2rem] bg-[#F7F7F7]">







            {/* THE NAVIGATION BAR */}
            <nav className="navbar">

                <img className=" h-[1.5rem]" src={navbarImg} alt="" />
            </nav>





















            {/* HERO SECTION */}
            <div className=" w-[100%] h-[100svh] bg-[#F7F7F7] flex flex-col justify-center items-center">







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











            {/* ABOUT US SECTION */}



            {/* PARALLAX SECTION */}



            {/* INITIATIVES SECTION */}



            {/* TEAM SECTION */}



            {/* CONNECT WITH US SECTION */}
        </div>
    )
}

export default LandingPage