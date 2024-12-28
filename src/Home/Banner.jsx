
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="banner-container ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        emulateTouch
        stopOnHover
      >
        <div className="h-[500px] backgroundImgOne  flex items-center justify-center text-white text-center p-10">
          
          <div className="">
            <h2 className="text-4xl font-bold mb-4"><Typewriter loop={true} delaySpeed={4000}  words={['Explore Visa Requirements','Apply for Visas Online','Track Your Application']}  /></h2>
            
            <p className="text-lg"><Typewriter deleteSpeed={20}  words={['Check visa requirements for any country with our easy-to-use tool.','Submit your visa applications online in a few simple steps.','Stay updated on your visa application status in real-time.']}  /></p>
          </div>
        </div>


        <div className="h-[500px] backgroundImgTwo flex items-center justify-center text-white text-center p-10">
          <div>
            <h2 className="text-4xl font-bold mb-4"><Typewriter loop={true} delaySpeed={4000} words={['Explore Visa Requirements','Apply for Visas Online','Track Your Application']}  /></h2>
            <p className="text-lg"><Typewriter deleteSpeed={20}   words={['Check visa requirements for any country with our easy-to-use tool.','Submit your visa applications online in a few simple steps.','Stay updated on your visa application status in real-time.']}  /></p>
          </div>
        </div>
        <div className="h-[500px] backgroundImgThree flex items-center justify-center text-white text-center p-10">
          <div>
            <h2 className="text-4xl font-bold mb-4"><Typewriter loop={true} delaySpeed={4000} words={['Explore Visa Requirements','Apply for Visas Online','Track Your Application']}  /></h2>
            <p className="text-lg"><Typewriter deleteSpeed={20}   words={['Check visa requirements for any country with our easy-to-use tool.','Submit your visa applications online in a few simple steps.','Stay updated on your visa application status in real-time.']}  /></p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
