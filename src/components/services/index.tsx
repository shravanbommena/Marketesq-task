import { AiFillFlag } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { HiMiniHome, HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdBicycle } from "react-icons/io";
import { MdFastfood } from "react-icons/md";
import { RiCarFill, RiMap2Fill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="mt-20 w-full max-w-screen-xl mx-auto">
      <h3 className="text-4xl text-center mb-7">Services</h3>
      <ul className=" gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center mx-auto">
        <li className="w-80 h-52 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <FaWifi />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">
            High Speed Internet
          </h4>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <MdFastfood />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Healthy Meals</h4>
          <p>
            A healthy breakfast and pleasant dinner will be serviced at your
            space every single day for your entire duration of stay with option
            of paid order within BriSphere.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <HiMiniHome />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Homely Stay</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <RiCarFill />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Transportation</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <IoMdBicycle />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Transportation</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <RiMap2Fill />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Tourism</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <AiFillFlag />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Job</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <RiCarFill />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Rental Service</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
        <li className="w-64 h-48 md:w-96 md:h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-7 flex flex-col items-center">
          <span className="text-3xl md:text-7xl text-[#A8A8A8] mb-5">
            <HiMiniShoppingCart />
          </span>
          <h4 className="text-lg md:text-2xl font-bold mb-4">Rental Service</h4>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
