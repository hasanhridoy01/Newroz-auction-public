import "./CarsBikeVespa.css";

//import all kind of items images
import img5 from "../../../../public/images/car&bike&vespa/car1.png";
import img6 from "../../../../public/images/car&bike&vespa/car2.png";
import img7 from "../../../../public/images/car&bike&vespa/car3.png";
import img8 from "../../../../public/images/car&bike&vespa/car4.png";
import img9 from "../../../../public/images/car&bike&vespa/car5.png";
import img10 from "../../../../public/images/car&bike&vespa/car6.png";
import Image from "next/image";

const CarsBikeVespa = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 mb-5 lg:hidden">
      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[149px] w-full bg-[#E6E6E6] rounded-xl">
          <Image
            src={img6}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                12
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                D
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                23
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                H
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                50
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                M
              </p>
            </div>
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
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>

      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[149px] w-full bg-[#E1F5E4] rounded-xl">
          <Image
            src={img6}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                12
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                D
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                23
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                H
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                50
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                M
              </p>
            </div>
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
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>

      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[149px] w-full bg-[#E6E6E6] rounded-xl">
          <Image
            src={img7}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                12
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                D
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                23
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                H
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                50
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                M
              </p>
            </div>
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
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>

      <div className="bg-none h-[243px] flex flex-col gap-4 cursor-pointer">
        <div className="relative h-[149px] w-full bg-[#D9E5EF] rounded-xl">
          <Image
            src={img6}
            fill
            quality={100}
            priority
            alt="cars images"
            className="object-cover"
          />
          <div className="absolute flex gap-4 -translate-x-1/2 left-1/2 bottom-4">
            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                12
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                D
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                23
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                H
              </p>
            </div>

            <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA]">
              <h4
                className="text-[12px] leading-[18px] text-center text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                50
              </h4>
              <p
                className="text-[12px] leading-[18px] text-center text-[#969696]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                M
              </p>
            </div>
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
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            Mercedes | SUV | 15000000
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CarsBikeVespa;
