import React from 'react'
import "../../globals.css"

// IMPORTING SVGS AND IMAGES HERE
import x from "../../../../public/svg/x.svg"

const LandingPageLargeScreens = () => {
  return (
    <div className='main'>

      <div>
        <svg className='theX' viewBox="0 0 210 210" fill="none">
          <path className='theXAnimation' d="M180 0H210V45L129.9 105.3L210 165.6V210H180V180.6L105 124.2L30 180.6V210H0V165.6L80.1 105.3L0 45V0H30V30L105 86.4L180 30V0Z" fill="none" />
        </svg>
      </div>


      <div className='font-league text-7xl font-extrabold'>WORK IN
        <span className=' text-[#FF3E1B]'> PROGRESS . . .</span>
      </div>

    </div>
  )
}

export default LandingPageLargeScreens