import { BsFacebook } from "react-icons/bs";
import "./App.css";
import { RiInstagramFill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import Services from "./components/services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <nav className="w-full px-5 h-28 flex items-center">
          <div className="w-full flex justify-between max-w-screen-xl mx-auto">
            <h1 className="text-3xl">Brisphere</h1>
            <ul className="flex text-xl gap-5">
              <li>Discover</li>
              <li>Services</li>
              <li>About Us</li>
            </ul>
          </div>
        </nav>
        <div className="w-full max-w-screen-xl bg-[#f4f4f4] flex justify-between">
          <div className="p-14">
            <h2 className="text-4xl md:text-6xl mb-6">Work from ladakh</h2>
            <p className="text-lg md:text-xl">
              India's first true digital tourism ecosystem
            </p>
            <div className="flex gap-5 text-5xl text-[#434343] mt-5">
              <span>
                <BsFacebook />
              </span>
              <span>
                <RiInstagramFill />
              </span>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1539700/pexels-photo-1539700.jpeg"
              alt="ladakh-1"
              className="size-96"
            />
          </div>
        </div>
        <div className="w-full max-w-[60%] mt-[-74px]">
          <div className="bg-white mx-auto rounded-xl p-8 shadow-lg flex justify-between items-center">
            <div>
              <p>CHECK-IN</p>
              <input type="date" />
            </div>
            <hr className="h-6" />
            <div>
              <p>CHECK-IN</p>
              <input type="date" />
            </div>
            <hr />
            <div>
              <p>ROOMS</p>
              <div className="flex gap-4 items-center mt-2">
                <div className="size-7 text-center border rounded-full text-xl">
                  -
                </div>
                <span>1</span>
                <div className="size-7 text-center border rounded-full text-xl">
                  +
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="bg-[#1F6C99] h-16 w-44 font-semibold text-white rounded-lg"
              >
                BOOK
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-10 text-4xl">Discover</h2>
        <div className="mt-10 md:flex items-start gap-7">
          {/* first card */}
          <div className="w-96 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-4 py-6 rounded-lg">
            <div className="flex items-center gap-5 mb-5">
              <img
                src="https://images.pexels.com/photos/18071744/pexels-photo-18071744/free-photo-of-black-and-white-picture-of-a-man-wearing-a-hat-and-standing-on-the-background-of-old-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile-img"
                className="rounded-full size-16"
              />
              <div>
                <h4 className="text-2xl font-bold mb-1">Arjun Raghav</h4>
                <div className="flex text-[#F9D977] text-base">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
              </div>
            </div>
            <p>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me.{" "}
              <span className="text-blue-500">read more</span>
            </p>
          </div>
          {/* second card */}
          <div className=" rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <img
              src="https://images.pexels.com/photos/15088313/pexels-photo-15088313/free-photo-of-wyoming-lake-marie-and-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pic"
              className="size-96 rounded-t-lg"
            />
            <div className="w-96 \ px-4 py-6 rounded-lg">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src="https://images.pexels.com/photos/18071744/pexels-photo-18071744/free-photo-of-black-and-white-picture-of-a-man-wearing-a-hat-and-standing-on-the-background-of-old-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile-img"
                  className="rounded-full size-16"
                />
                <div>
                  <h4 className="text-2xl font-bold mb-1">Arjun Raghav</h4>
                  <div className="flex text-[#F9D977] text-base">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                </div>
              </div>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.{" "}
                <span className="text-blue-500">read more</span>
              </p>
            </div>
          </div>
          {/* third card */}
          <div className="flex flex-col gap-7">
            <div className="w-96 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-4 py-6 rounded-lg">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src="https://images.pexels.com/photos/18071744/pexels-photo-18071744/free-photo-of-black-and-white-picture-of-a-man-wearing-a-hat-and-standing-on-the-background-of-old-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile-img"
                  className="rounded-full size-16"
                />
                <div>
                  <h4 className="text-2xl font-bold mb-1">Arjun Raghav</h4>
                  <div className="flex text-[#F9D977] text-base">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                </div>
              </div>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.{" "}
                <span className="text-blue-500">read more</span>
              </p>
            </div>
            <div className="w-96  px-4 py-6 rounded-lg ml-[-15px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src="https://images.pexels.com/photos/18071744/pexels-photo-18071744/free-photo-of-black-and-white-picture-of-a-man-wearing-a-hat-and-standing-on-the-background-of-old-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile-img"
                  className="rounded-full size-16"
                />
                <div>
                  <h4 className="text-2xl font-bold mb-1">Arjun Raghav</h4>
                  <div className="flex text-[#F9D977] text-base">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                </div>
              </div>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.{" "}
                <span className="text-blue-500">read more</span>
              </p>
            </div>
          </div>
        </div>
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
