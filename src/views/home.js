import React from 'react'
import data from '../assests/data/data'
import Multislider from '../components/multislider'
import Slider from '../components/Slider'
import bgimage from '../assests/bgimage/cartoonbones1.png'
import Aos from 'aos'
import services from '../assests/data/constant'
const Home = () => {
  Aos.init()
  return (
    <div>
      <Slider data={data.slider} height="140vh" />
      <div style={{ backgroundImage: `url(${bgimage})` }}>
        <div
          className="max-w-[1024px] mx-auto "
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 className="text-[#108896] uppercase font-bold text-center text-5xl my-[5rem]">
            {services.heading}
          </h1>
          <p className="text-center my-[5rem] text-slate-600 fw-semibold">
            {services.description}
          </p>
          <Multislider data={data.servicesslider} />
        </div>
      </div>
    </div>
  )
}

export default Home
