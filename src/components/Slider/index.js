import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go'
const Slider = (props) => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
  }
  return (
    <div className="my-[5%]">
      <Carousel
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        stopOnHover={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <GoTriangleLeft
              style={{ ...arrowStyles, left: 15 }}
              onClick={onClickHandler}
              title={label}
              color="#ffffff"
            />
          )
        }
        renderArrowNext={(onClickHandler, label, hasNext) =>
          hasNext && (
            <GoTriangleRight
              style={{ ...arrowStyles, right: 15 }}
              onClick={onClickHandler}
              title={label}
              color="#ffffff"
            />
          )
        }
      >
        {props.data.map((val, id) => {
          return (
            <div
              style={{
                backgroundImage: `url(${val.img})`,
                height: props.height,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Slider
