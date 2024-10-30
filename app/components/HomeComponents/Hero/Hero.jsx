import "./Hero.css";
import car from "../../../../public/images/Hero/CarwithShadow.png";
import auction from "../../../../public/images/Hero/AUCTION.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative layout-color">
      <div className="container mx-auto lg:h-[600px] h-auto lg:pt-44 pt-36 grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:pl-14 pl-0 lg:pr-0">
        {/* Apply container only to the left side */}
        <div className="">
          <h2
            className="lg:text-[32px] text-[24px] text-[#585865] lg:leading-[48px] leading-[36px] lg:text-left text-center"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Rev Up Your Auctions!
          </h2>
          <h1
            className="lg:text-[80px] text-[42px] text-[#A52828] lg:leading-[80px] leading-[48px] lg:text-left p-0 uppercase mt-2 text-center"
            style={{ fontFamily: "Poppins", fontWeight: 900 }}
          >
            Buy, Sell, Bid
          </h1>
          <h3
            className="lg:text-[40px] text-[18px] text-gray-500 lg:leading-[60px] leading-[27px] lg:text-left p-0 mt-2 text-center"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            on{" "}
            <span className="font-bold text-gray-700 uppercase">
              Cars, Bikes,
            </span>{" "}
            and{" "}
            <span className="font-bold text-gray-700 uppercase">Vespas</span>{" "}
            Today!
          </h3>
          <p
            className="text-[16px] text-[#585865] leading-[24px] mt-5 text-left hidden lg:flex"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Discover a world of vehicles at unbeatable prices. Join our auctions
            to find your next ride or sell your vehicle to a network of ready
            buyers.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mx-auto mt-8 lg:gap-3 lg:mx-0 lg:justify-start lg:items-start lg:flex-row">
            <button
              className="w-[173px] h-[56px] rounded-[500px] bg-[#E93839] border border-[#D43334] text-white text-center hover:bg-[#e8e8e8] hover:text-[#000]"
              style={{
                fontFamily: "Roboto",
                fontWeight: 700,
                lineHeight: "21px",
              }}
            >
              Sign Up to Bid
            </button>
            <button
              className="w-[215px] h-[56px] rounded-[500px] bg-transparent border border-[#D43334] text-[#621818] text-center hover:bg-[#E93839] hover:text-[#fff]"
              style={{
                fontFamily: "Roboto",
                fontWeight: 700,
                lineHeight: "21px",
              }}
            >
              Register as a Seller
            </button>
            <button
              className="hidden lg:flex items-center justify-center w-[173px] h-[56px] rounded-[500px] text-center hover:text-[#E93839] hover:border-2 hover:underline"
              style={{
                fontFamily: "Roboto",
                fontWeight: 700,
                lineHeight: "21px",
              }}
            >
              How it works?
            </button>
          </div>
        </div>
      </div>
      {/* Right side content without container */}
      <div className="absolute right-0 hidden top-16 lg:flex">
        <Image
          src={car}
          alt="logo image"
          width={740}
          height={520}
          quality={100}
          priority
        />
      </div>

      <div className="items-center justify-center hidden lg:flex">
        <Image
          src={auction}
          alt="logo image"
          width={900}
          height={610}
          quality={100}
          priority
          className="auction-image"
        />
      </div>
    </div>
  );
};

export default Hero;
