import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWeaponDetail } from "../redux/weaponSlice";
import Loader from "../layouts/Loader";

const WeaponDetail = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  const { weaponDetail, weaponDetailStatus } = useSelector(
    (state) => state.weapons
  );

  useEffect(() => {
    dispatch(getWeaponDetail(uuid));
  }, [dispatch, uuid]);
  return (
    <>
      {weaponDetailStatus === "LOADING" ? (
        <Loader />
      ) : (
        <div className="flex justify-center px-3 flex-col w-full bg-black text-white">
          <div className="font-bold w-full py-4">
            <div className="text-2xl uppercase text-center">
              {weaponDetail?.displayName}
            </div>
            <div className="text-sm text-center mt-2">#{uuid}</div>
            <div className="flex justify-center items-center py-5">
              <img src={weaponDetail?.displayIcon} alt="" />
            </div>
            <div className="flex justify-center">
              <div className="font-bold text-sm py-5 md:flex gap-2 flex-wrap justify-center">
                <div>fireRate: {weaponDetail?.weaponStats?.fireRate}</div>
                <div>
                  magazineSize: {weaponDetail?.weaponStats?.magazineSize}
                </div>
                <div>
                  reloadTimeSeconds:{" "}
                  {weaponDetail?.weaponStats?.reloadTimeSeconds}s
                </div>
                <div>
                  equipTimeSeconds:{" "}
                  {weaponDetail?.weaponStats?.equipTimeSeconds}s
                </div>
                <div>
                  firstBulletAccuracy:{" "}
                  {weaponDetail?.weaponStats?.firstBulletAccuracy}
                </div>
                <div>
                  bodyDamage:{" "}
                  {weaponDetail?.weaponStats?.damageRanges[0]?.bodyDamage}
                </div>
                <div>
                  legDamage:{" "}
                  {weaponDetail?.weaponStats?.damageRanges[0]?.legDamage}
                </div>
                <div>
                  rangeEndMeters:{" "}
                  {weaponDetail?.weaponStats?.damageRanges[0]?.rangeEndMeters}
                </div>
              </div>
            </div>
            <div className="text-center text-sm py-2">
              {weaponDetail?.shopData?.category}
            </div>
            <div className="text-sm text-center">
              ( {weaponDetail?.shopData?.cost}V )
            </div>
          </div>
          <div className="w-full font-bold py-2">
            {weaponDetail?.skins?.map((skin) => (
              <div
                key={skin?.uuid}
                className="py-5 hover:bg-red-600 border-t-2 transition-all duration-700"
              >
                <div className="py-2 ">
                  <span className="uppercase mr-2">{skin?.displayName}</span>#
                  {skin?.uuid}
                </div>
                <div className="flex justify-center gap-3 flex-wrap">
                  {skin?.chromas?.map((chroma) => (
                    <div key={chroma?.uuid} className="flex flex-col gap-2">
                      <img src={chroma?.fullRender} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WeaponDetail;
