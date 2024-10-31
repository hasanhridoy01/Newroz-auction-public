import "./CarsBikeVespa.css";

// Import all kind of items images
import img5 from "../../../../public/images/car&bike&vespa/car1.png";
import img6 from "../../../../public/images/car&bike&vespa/car2.png";
import img7 from "../../../../public/images/car&bike&vespa/car3.png";
import img8 from "../../../../public/images/car&bike&vespa/car4.png";
import Image from "next/image";
import ComeDown from "../ComeDown/ComeDown";

const CarsBikeVespa = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 mb-5 lg:hidden">
      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[175px] w-full bg-[#E6E6E6] rounded-xl">
          <Image
            src={img6}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <ComeDown value={4} label="D" />
            <ComeDown value={8} label="H" />
            <ComeDown value={30} label="M" />
          </div>
        </div>
        <div className="">
          <h2
            className="text-[20px] landing-[30px] text-[#222222]"
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
          >
            Mercedes-Benz EQS
          </h2>
          <h5
            className="mt-1 text-[16px] landing-[28px] text-[#969696]"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>

      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[175px] w-full bg-[#E1F5E4] rounded-xl">
          <Image
            src={img6}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <ComeDown value={10} label="D" />
            <ComeDown value={6} label="H" />
            <ComeDown value={30} label="M" />
          </div>
        </div>
        <div>
          <h2
            className="text-[20px] leading-[30px] text-[#222222]"
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
          >
            Mercedes-Benz EQS
          </h2>
          <h5
            className="mt-1 text-[16px] leading-[28px] text-[#969696]"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>

      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[175px] w-full bg-[#E6E6E6] rounded-xl">
          <Image
            src={img7}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <ComeDown value={19} label="D" />
            <ComeDown value={6} label="H" />
            <ComeDown value={30} label="M" />
          </div>
        </div>
        <div className="">
          <h2
            className="text-[20px] landing-[30px] text-[#222222]"
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
          >
            Mercedes-Benz EQS
          </h2>
          <h5
            className="mt-1 text-[16px] landing-[28px] text-[#969696]"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>

      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[175px] w-full bg-[#D9E5EF] rounded-xl">
          <Image
            src={img6}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <ComeDown value={34} label="D" />
            <ComeDown value={6} label="H" />
            <ComeDown value={20} label="M" />
          </div>
        </div>
        <div className="">
          <h2
            className="text-[20px] landing-[30px] text-[#222222]"
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
          >
            Mercedes-Benz EQS
          </h2>
          <h5
            className="mt-1 text-[16px] landing-[28px] text-[#969696]"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CarsBikeVespa;
