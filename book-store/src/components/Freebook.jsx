import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Freebook = () => {
    const settings = {
        dots: true,
        infinite: false,
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
                <Slider {...settings} className='px-4'>
                    <div className="card border max-w-96 min-h-96 rounded-2xl">
                        <div className="img">
                            <img src="" alt="image" srcset="" />
                        </div>
                        <div className="content">
                            <h1 className='font-bold text-xl px-4'>Hello world</h1>
                            <p className='font-bold px-4 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, exercitationem!
                                 Itaque eos eius error aliquam animi velit, sunt deserunt,
                                 </p>
                                 <div className="card-btn justify-between flex px-9">
                                    <button className='border px-3 rounded-full text-white hover:bg-sky-500'>Free</button>
                                    <button className='border px-3 rounded-full text-white hover:bg-sky-500'>Read</button>
                                 </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Freebook