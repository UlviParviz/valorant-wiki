import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMaps } from '../redux/mapSlice'
import MapCard from '../components/MapCard'
import Loader from '../layouts/Loader'

const Maps = () => {
    const dispatch = useDispatch()
    const {maps, mapsStatus} = useSelector(state => state.maps)

    useEffect(()=>{
        dispatch(getMaps())
    }, [dispatch])
  return (
    <div className="flex justify-center px-1.5 py-5 min-h-screen">
      {mapsStatus === 'LOADING' ? (
        <Loader/>
      ): (
    <div className=" flex flex-wrap lg:gap-3 lg:justify-start justify-center gap-5">
    {maps?.map((map) => (
        map.displayName !== 'The Range' && (
        <MapCard key={map?.uuid} map={map}/>)
    ))}
    </div>
      )}
    </div>
  )
}

export default Maps