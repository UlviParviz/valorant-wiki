import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMapDetail } from "../redux/mapSlice";
import Loader from "../layouts/Loader";

const MapDetail = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  const { mapDetail, mapDetailStatus } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(getMapDetail(uuid));
  }, [dispatch, uuid]);

  const {
    displayName,
    tacticalDescription,
    coordinates,
    displayIcon,
    premierBackgroundImage,
    stylizedBackgroundImage,
    splash,
    callouts,
  } = mapDetail || {};

  return (
    <>
      {mapDetailStatus === "LOADING" ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <div>
            <img
              className="w-full"
              src={splash}
              alt={`${displayName} splash`}
            />
          </div>
          <div
            className="flex justify-center gap-3 flex-col p-3 items-center lg:flex-row"
            style={{
              backgroundImage: `url(${
                premierBackgroundImage || stylizedBackgroundImage
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="">
              <div className="flex flex-col items-center justify-center">
                <div className="text-sm font-bold text-white">#{uuid}</div>
                <img
                  className="w-[60%]"
                  src={displayIcon}
                  alt={`${displayName} icon`}
                />
              </div>
              <div className="text-center text-white font-bold text-3xl uppercase">
                {displayName}
              </div>
              <div className="text-2xl text-center font-bold text-white uppercase">
                {coordinates || "Coordinates are unknown"}
              </div>
              <div className="text-2xl font-bold text-center text-white uppercase">
                {tacticalDescription ||
                  (["District", "Kasbah", "Drift", "Piazza"].includes(
                    displayName
                  )
                    ? "Team Deathmatch"
                    : "")}
              </div>
            </div>
            <div className="text-center text-white flex flex-col gap-1">
              <div className="mb-2 py-2 text-3xl font-bold border-b-2 uppercase">
                Locations
              </div>
              {callouts?.map((callout, index) => (
                <div key={index} className="font-bold">
                  <span>{callout?.regionName}</span>
                  <span className="mx-1">{callout?.superRegionName}</span>
                  <span>
                    ({callout?.location?.x}, {callout?.location?.y})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapDetail;
