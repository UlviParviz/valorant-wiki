import React from 'react'
import { FaEye } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const WeaponCard = ({weapon}) => {
    const navigate = useNavigate()

    const {displayName, weaponStats, displayIcon, shopData, uuid} = weapon
  return (
    <div className=' flex flex-col lg:w-[24%] md:w-[45%] w-[88%] bg-black  transition-all duration-700 text-white font-bold rounded-lg py-4 px-2 gap-2'>
        <div className='w-full h-[100px] flex justify-center'>
            <img className='w-full h-full' src={displayIcon} alt="" />
        </div>
        <div className='font-bold text-2xl py-1'>
            <div className='text-sm text-center uppercase'>{displayName} {`#${uuid.substring(0, 13)}`}</div>
            <div className='text-sm font-extrabold text-center'>{shopData?.category} ({shopData?.cost}V)</div>
        </div>
        <div className='font-bold text-sm border-t-2 py-2'>
            <div>fireRate: {weaponStats?.fireRate}</div>
            <div>magazineSize: {weaponStats?.magazineSize}</div>
            <div>reloadTimeSeconds: {weaponStats?.reloadTimeSeconds}s</div>
            <div>equipTimeSeconds: {weaponStats?.equipTimeSeconds}s</div>
            <div>firstBulletAccuracy: {weaponStats?.firstBulletAccuracy}</div>
        </div>
        <div className='border-t-2 py-2'>
        <button onClick={() => navigate(`/weapons/${uuid}`)} className="text-red hover:before:bg-redborder-red-600 relative w-full overflow-hidden px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-700 py-1 rounded-md hover:text-white hover:shadow-red-600 hover:before:left-0 hover:before:w-full"><span className="flex justify-center items-center gap-2 relative z-10">            <div>More Details</div>
            <FaEye/></span></button>
        </div>
    </div>
  )
}

export default WeaponCard