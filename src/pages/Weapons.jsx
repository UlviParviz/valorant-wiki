import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeapons } from '../redux/weaponSlice';
import WeaponCard from '../components/WeaponCard';
import Loader from '../layouts/Loader';
const Weapons = () => {
    const dispatch = useDispatch();
    const {weapons, weaponsStatus} = useSelector((state) => state.weapons)

    useEffect(()=> {
        dispatch(getWeapons());
    }, [dispatch])


  return (
    <div className="flex justify-center px-1.5 py-5 min-h-screen">
      {weaponsStatus === 'LOADING' ? (
        <Loader/>
      ) : (
    <div className=" flex flex-wrap lg:gap-3 lg:justify-start justify-center gap-5">
      {weapons?.map((weapon) => (

      weapon?.displayName !== 'Melee' && (
        <WeaponCard key={weapon?.uuid}  weapon={weapon} />)

    ))}</div>
      )}
    </div>
  )
}

export default Weapons