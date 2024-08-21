import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Freebook = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='text-gray-400'>
            <h2 className='font-bold text-2xl ml-4 text-sky-500'>Free Offerd Books</h2>
            <p className='ml-4 my-3 font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat neque laborum, eum nisi earum, perspiciatis placeat nam a odit deleniti
                inventore tempore voluptates praesentium consequuntur
                consectetur ea maiores aliquam beatae?</p>

            <div className="book-cards">
                <Slider {...settings}>
                    <div className="card">
                        <div className="img">
                            <img src="" alt="" srcset="" />
                        </div>
                        <div className="content">
                            <h1>Hello world</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, exercitationem!
                                 Itaque eos eius error aliquam animi velit, sunt deserunt,
                                 </p>
                                 <div className="card-btn">
                                    <button>Free</button>
                                    <button>Read</button>
                                 </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Freebook