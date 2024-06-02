import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getMaps } from "../redux/mapSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    const dispatch = useDispatch()
    const {maps, mapsStatus} = useSelector(state => state.maps)

    useEffect(()=>{
        dispatch(getMaps())
    }, [dispatch])
  var settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed:6000,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
        {maps?.map((map) => (
            <div key={map?.uuid}>
                <img className="" src={map?.splash} alt="" />
            </div>
        ))}
    </Slider>
  );
}