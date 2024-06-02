import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../redux/agentSlice";
import AgentCard from "../components/AgentCard";
import Loader from "../layouts/Loader";

const Agents = () => {
  const dispatch = useDispatch();
  const { agents, agentsStatus } = useSelector((state) => state.agents);

  useEffect(() => {
    dispatch(getAllAgents());
  }, [dispatch]);
  return (
    <div className="flex justify-center px-1.5 py-5 min-h-screen">
      {agentsStatus === 'LOADING' ? (
        <Loader/>
      ) : (
    <div className=" flex flex-wrap lg:gap-3 lg:justify-start justify-center gap-5 ">
      {agents?.map(
        (agent) => agent?.role && <AgentCard key={agent?.uuid} agent={agent} />
      )}
    </div>
      )}
    </div>
  );
};

export default Agents;
