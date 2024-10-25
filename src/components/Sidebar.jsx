import weatherLogo from '../assets/weather-icon.png'
import weatherPageLogo from '../assets/cloud.png'
import Cities from '../assets/cityscape.png'
import Cogwheel from '../assets/cogwheel.png'
const Sidebar = () => {
  return (
    <>
      <div className="relative">
        <div className=" abosolute top-0 left-0 w-16 md:w-20 p-4 flex flex-col items-center rounded-xl shadow-lg ">

          <img src={weatherLogo} alt="weatherLogo" className='w-10 object-fill' />



          {/* <div className='flex flex-col items-center mt-20'>
            <img src={weatherPageLogo} alt="weatherLogo" className='w-8' />
            <h3 className="hidden md:block text-gray-400">Weather</h3>
          </div>

          <div className='flex flex-col items-center mt-8'>
            <img src={Cities} alt="cities" className='w-8' />
            <h3 className="hidden md:block text-gray-400">Cities</h3>
          </div>

          <div className='flex flex-col items-center mt-8'>
            <img src={Cogwheel} alt="cities" className='w-10' />
            <h3 className="hidden md:block text-gray-400">Settings</h3>
          </div> */}

        </div >
      </div>
    </>
  );
};

export default Sidebar;
