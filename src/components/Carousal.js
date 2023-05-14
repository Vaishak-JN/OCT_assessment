import poster1 from "../assets/poster1.png"
import poster2 from "../assets/poster2.png"
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
};

const Carousal = () => {
    return (
        <>
            <Slider {...settings}>
                <div className="poster-container">
                    <img src={poster1} alt="poster" />
                </div>
                <div className="poster-container">
                    <img src={poster2} alt="poster" />
                </div>
                <div className="poster-container">
                    <img src={poster2} alt="poster" />
                </div>
                <div className="poster-container">
                    <img src={poster2} alt="poster" />
                </div>

            </Slider>
        </>
    )
}

export default Carousal