import React from "react";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AgentCard = ({ agent }) => {
  const { background, backgroundGradientColors, displayName, displayIconSmall, role, abilities, uuid } = agent;
  const navigate = useNavigate();

  const handleMouseEnter = (e, color) => {
    e.currentTarget.style.backgroundColor = `#${color}`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'black';
  };

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
        {abilities?.map((ability, index) => (
          ability?.displayIcon && (
            <div
              key={index}
              className="bg-black w-[20%] p-1 rounded-md border border-slate-200 transition-all duration-700 justify-center items-center"
              onMouseEnter={(e) => handleMouseEnter(e, backgroundGradientColors[0])}
              onMouseLeave={handleMouseLeave}
              style={{ transition: 'background-color 0.7s' }}
            >
              <img className="object-cover w-full h-full" src={ability?.displayIcon} alt="" />
            </div>
          )
        ))}
      </div>
      <div className="flex justify-center items-center bg-black gap-4 py-2 rounded-md my-1">
        <div className="w-[12%]">
          <img className="w-full" src={role?.displayIcon} alt="" />
        </div>
        <div className="text-white text-xl uppercase font-bold">
          {role?.displayName}
        </div>
      </div>

      <div className="font-bold py-1 text-center uppercase text-white text-sm bg-black rounded-md" style={{ color: `#${backgroundGradientColors[0]}` }}>
        {displayName} <span className="text-sm">{`#${uuid.substring(0, 13)}`}</span>
      </div>
      <div className="flex justify-center items-center text-white py-1.5 gap-2 text-sm mt-1 font-bold">
        <div
          onClick={() => navigate(`/agents/${agent?.uuid}`)}
          className="bg-black p-2 flex justify-center items-center gap-2 cursor-pointer transition-all duration-700"
          style={{ transition: 'color 0.7s' }}
          onMouseEnter={e => e.currentTarget.style.color = `#${backgroundGradientColors[0]}`}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
        >
          <div>View Details</div>
          <FaEye />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
