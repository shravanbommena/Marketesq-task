const Footer = () => {
  return (
    <div className="bg-[#ECECEC] w-full mt-24">
      <div className="w-full max-w-screen-xl mx-auto container p-8">
        <h3 className="text-4xl font-bold mb-4">Brisphere</h3>
        <p className="text-lg leading-8 mb-6">
          Spituk, Ladakh,
          <br /> India, 194101 <br />
          +91 - 7764997033
          <br /> amit.jha6700@gmail.com
        </p>
        <button
          type="button"
          className="bg-[#1F6C99] h-20 w-52 rounded-md text-2xl text-white font-bold"
        >
          Location
        </button>
      </div>
    </div>
  );
};

export default Footer;
