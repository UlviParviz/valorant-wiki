import React from "react";
import { FaEye } from "react-icons/fa6";

const AgentCard = ({ agent }) => {
  const { background, backgroundGradientColors, displayName, displayIconSmall, role, abilities,uuid} = agent;

  return (
    <div
      className="py-3 px-1 lg:w-[19%] md:w-[45%] w-[88%] rounded-lg flex flex-col justify-between"
      style={{
        backgroundColor: `#${backgroundGradientColors[0]}`,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex justify-center items-center">
        <img className="w-[55%] object-cover rounded-md" src={displayIconSmall} alt="" />
      </div>
      <div className="flex gap-2 mt-2 justify-center">
        {abilities?.map((abilities, index) => (
            abilities?.displayIcon && (
                <div key={index} className="bg-black w-[20%] p-1 rounded-md hover:opacity-70 transition-all duration-500 justify-center items-center">
                    <img className="object-cover w-full h-full" src={abilities?.displayIcon} alt="" />
                </div>
            )
        ))}
      </div>
      <div className="flex justify-center items-center bg-black gap-4 py-2 rounded-md my-1">
        <div className="w-[12%]">
            <img className="w-full " src={role?.displayIcon} alt="" />
        </div>
        <div className="text-white text-xl uppercase font-bold">
            {role?.displayName}
        </div>
      </div>

      <div className=" font-bold py-1 text-center uppercase text-white text-sm bg-black rounded-md" style={{color: `#${backgroundGradientColors[0]}`}}>
        {displayName} <span className="text-sm">{`#${uuid.substring(0,13)}`}</span>
      </div>
      <div className="flex justify-center items-center text-white py-1.5 gap-2 text-sm mt-1 font-bold"> 
      <div className="bg-black p-2 flex justify-center items-center gap-2 cursor-pointer hover:opacity-60 transition-all duration-700">
        <div>View Details</div>
      <FaEye/>
      </div>
        </div>
    </div>
  );
};

export default AgentCard;
