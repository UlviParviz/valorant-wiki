import React from "react";
import { useNavigate } from "react-router-dom";

const MapCard = ({ map }) => {
    const navigate = useNavigate()
  const {
    displayName,
    tacticalDescription,
    coordinates,
    displayIcon,
    listViewIcon,
    premierBackgroundImage,
    stylizedBackgroundImage,
    uuid,
  } = map;
  return (
    <div className="lg:w-[24%] md:w-[45%] w-[88%] font-bold rounded-md overflow-hidden">
      <div>
        <img src={listViewIcon} alt="" />
      </div>
      <div className="text-center bg-black text-white uppercase">
        {displayName}{" "}
        <span className="text-sm text-center bg-black text-white">{`#${uuid.substring(0, 13)}`}</span>
      </div>
      <div className="text-sm text-center bg-black text-white uppercase">{coordinates || 'coordinates are unknown'}</div>
      <div className="text-sm text-center bg-black text-white uppercase">{tacticalDescription ? tacticalDescription : (displayName === 'District' || displayName === 'Kasbah' || displayName === 'Drift' || displayName === 'Piazza' ) ? 'Team Deathmatch' : ""}</div>
      <div
        style={{
          backgroundImage: `url(${premierBackgroundImage ? premierBackgroundImage : stylizedBackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img src={displayIcon} alt="" />

        <div onClick={() => navigate(`/maps/${uuid}`)} className="text-white bg-transparent w-full mx-auto text-center py-2 cursor-pointer hover:text-white hover:bg-black transition-all duration-700">View Details</div>
        
      </div>
    </div>
  );
};

export default MapCard;
