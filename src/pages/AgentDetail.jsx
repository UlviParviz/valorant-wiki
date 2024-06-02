import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgentDetail } from "../redux/agentSlice";
import Loader from "../layouts/Loader";

const AgentDetail = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  const { agentDetail, agentDetailStatus } = useSelector((state) => state.agents);

  const {
    displayName,
    background,
    backgroundGradientColors,
    fullPortrait,
    role,
    abilities,
    description,
  } = agentDetail || {};

  useEffect(() => {
    dispatch(getAgentDetail(uuid));
  }, [dispatch, uuid]);

  return (
    <>
    {agentDetailStatus === 'LOADING' ? (
      <Loader/>
    ) : (
    <div className="flex justify-center lg:flex-row flex-col min-h-screen">
      <div
        className="lg:w-[50%] w-full py-5"
        style={{
          backgroundColor: `#${backgroundGradientColors?.[0] || '000'}`,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img className="w-full" src={fullPortrait} alt={`${displayName} portrait`} />
      </div>
      <div
        className="lg:w-[50%] w-full flex flex-col gap-3 py-4"
        style={{ backgroundColor: `#${backgroundGradientColors?.[0] || '000'}` }}
      >
        <div className="font-bold text-sm text-center">#{uuid}</div>
        <div
          className="font-bold text-2xl bg-black py-1 rounded-md text-center"
          style={{ color: `#${backgroundGradientColors?.[0] || '000'}` }}
        >
          {displayName}
        </div>
        <div className="bg-black text-white py-3 rounded-md font-semibold px-2">
          {description}
        </div>
        <div className="flex justify-center items-center bg-black py-3 rounded-md">
          <div className="w-[12%]">
            <img className="w-[80%]" src={role?.displayIcon} alt={`${role?.displayName} icon`} />
          </div>
          <div
            className="text-white text-xl uppercase font-bold"
            style={{ color: `#${backgroundGradientColors?.[0] || '000'}` }}
          >
            {role?.displayName}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {abilities?.map((ability, index) => (
            ability?.displayIcon && (
              <div
                key={index}
                className="bg-black text-white hover:text-black font-bold flex gap-2 px-1.5 rounded-md hover:bg-transparent hover:cursor-default transition-all duration-700 py-2 items-center"
              >
                <div className="w-[25%] border-r-2 flex justify-center items-center">
                  <img className="w-[40px] h-[45px]" src={ability?.displayIcon} alt={`${ability?.displayName} icon`} />
                </div>
                <div className="text-end w-full">
                  <div
                    className="text-xl font-bold"
                    style={{ color: `#${backgroundGradientColors?.[0] || '000'}` }}
                  >
                    {ability?.displayName}
                  </div>
                  <div className="font-bold text-sm mt-1">
                    {ability?.description}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default AgentDetail;
