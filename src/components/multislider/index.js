import React from 'react'
import Carousel from 'react-multi-carousel'
import Button from '../button'
const Multislider = (props) => {
  const responsive = {
    superLargeDektop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        autoPlaySpeed={500}
        infinite={true}
      >
        {props.data.map((val, i) => {
          return (
            <div className="text-center shadow-[#eee] border w-[90%] h-[450px] bg-[#ffffff]  rounded-lg ">
              <div className="relative overflow-hidden cursor-pointer">
                <div>
                  <img
                    src={val.img}
                    width="100%"
                    height={200}
                    className="hover:scale-[1.2] ease-in-out duration-[1s] rounded-lg"
                  />
                </div>
              </div>
              <h2 className="font-bold text-3xl capitalize  text-center">
                {val.heading}
              </h2>
              <p className="text-center p-4">{val.description}</p>
              <Button className="rounded-[25px] bg-[#EF5030] p-[15px] text-[15px] text-white hover:bg-[#108896] ">
                Read More
              </Button>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Multislider
