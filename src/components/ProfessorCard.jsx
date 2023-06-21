import React from "react";
import { Tilt } from "react-tilt";
import aa from "../assets/aa.png";
import Rating from "./Rating";




const ProfessorCard = () => {
    return (
        <Tilt options = {{
            max: 45,
            scale:1,
            speed:450,
        }}
        className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="w-full h-[230px]">
                <img src={aa} alt="Professor's Image" className="w-full h-full object-cover rounded-2xl"/>
            </div>
            <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>Asli Ipeak</h3>
          <p className='mt-2 text-[#aaa6c3] text-[14px]'>20+ years experience in education, teaching academic English, English as a second language, mentoring, leadership, interpersonal and cross-cultural communication</p>
        </div>
        <div>
       <Rating rating={4} />
        </div>
        </Tilt>
    )

};

export default ProfessorCard;