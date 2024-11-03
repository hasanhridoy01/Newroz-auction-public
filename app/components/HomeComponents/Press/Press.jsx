import "./Press.css";
import img from "../../../../public/images/Home/thumb.png";
import Image from "next/image";

//import images file section
import img1 from "../../../../public/images/Home/morningImages/Views/fream1.png";
import img2 from "../../../../public/images/Home/morningImages/Views/fream2.png";
import img3 from "../../../../public/images/Home/morningImages/Views/fream3.png";

const Press = () => {
  return (
    <div className="container px-5 py-5 mx-auto lg:px-14 lg:py-6">
      <div className="items-center justify-between hidden mb-2 lg:flex">
        <div className="">
          <h2 className="apply-fontFamily text-[32px] landing-[48px] text-[#222222] font-semibold">
            Good morning
          </h2>
          <h5 className="apply-fontFamily text-[14px] landing-[21px] text-[#222222] font-medium">
            Monday, December 25, 2024
          </h5>
        </div>
        <div className="">
          <button className="flex flex-row gap-3 apply-fontFamily text-[#222222] text-[20px] landing-[30px] font-bold">
            View All Press{" "}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4301 6.42993L20.5001 12.4999L14.4301 18.5699M3.5 12.5H20.33"
                stroke="#222222"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:h-[240px] h-auto lg:mb-20 mb-10">
        <div className="lg:hidden">
          <h2 className="apply-fontFamily text-[32px] landing-[48px] text-[#222222] font-semibold">
            Good morning
          </h2>
          <h5 className="apply-fontFamily text-[14px] landing-[21px] text-[#222222] font-medium">
            Monday, December 25, 2024
          </h5>
        </div>
        <div className="relative grid grid-cols-1 gap-4 p-1 lg:grid-cols-2">
          <div className="relative">
            <Image src={img} alt="image" priority quality={100} />
          </div>
          <div className="relative">
            <p className="apply-fontFamily text-[14px] landing-[21px]" style={{ fontWeight: 600 }}>
              Yang guys bid on a car and he wins the auction. He arrange aar
              handover ceremony.{" "}
            </p>
            <p className="apply-fontFamily text-[13px] landing-[21px] mt-2" style={{ fontWeight: 400 }}>
              Car handover ceremony. Yang guys bid on a car and he wins the
              auction. Finally, after checking and obtaining documentation, The
              happy customer received the car key.
            </p>
            <p className="apply-fontFamily text-[13px] landing-[21px] font-light mt-2 mb-12" style={{ fontWeight: 400 }}>
              Car handover ceremony. Yang guys bid on a car and he wins the
              auction. Finally, after checking and obtaining documentation, he
              received the car key.
            </p>

            <div className="absolute bottom-0 mt-10">
              <p className="text-[#73737E]">Mar 20, 2019 23:14</p>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <button className="flex flex-row gap-3 apply-fontFamily text-[#222222] text-[20px] landing-[30px] font-bold">
            View All Press{" "}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4301 6.42993L20.5001 12.4999L14.4301 18.5699M3.5 12.5H20.33"
                stroke="#222222"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Over Flow container */}
        <div className="flex-col hidden gap-5 p-2 overflow-container lg:flex">
          <div className="grid grid-cols-5 gap-3">
            <div className="relative flex items-start justify-end col-span-1">
              <Image
                src={img3}
                priority
                height={64}
                width={64}
                quality={100}
                alt="morning image"
              />
            </div>
            <div className="flex flex-col col-span-4 gap-1 pr-2">
              <h2
                className="text-[15px] landing-[21px]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                Understanding color theory: the color wheel and finding
                complementary colors
              </h2>
              <p
                className="text-[12px] landing-[16px]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Dec 30, 2019 05:18
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="relative flex items-start justify-end col-span-1">
              <Image
                src={img1}
                priority
                height={64}
                width={64}
                quality={100}
                alt="morning image"
              />
            </div>
            <div className="flex flex-col col-span-4 gap-1 pr-2">
              <h2
                className="text-[15px] landing-[21px]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                Yo Reddit! What’s a small thing that anyone can do at nearly
                anytime to improve their mood and make
              </h2>
              <p
                className="text-[12px] landing-[16px]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Dec 4, 2019 05:18
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="relative flex items-start justify-end col-span-1">
              <Image
                src={img2}
                priority
                height={64}
                width={64}
                quality={100}
                alt="morning image"
              />
            </div>
            <div className="flex flex-col col-span-4 gap-1 pr-2">
              <h2
                className="text-[15px] landing-[21px]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                How to design a product that can grow itself 10x in year:
              </h2>
              <p
                className="text-[12px] landing-[16px] text-[#E93839]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Feb 2, 2019 19:28
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="relative flex items-start justify-end col-span-1">
              <Image
                src={img3}
                priority
                height={64}
                width={64}
                quality={100}
                alt="morning image"
              />
            </div>
            <div className="flex flex-col col-span-4 gap-1 pr-2">
              <h2
                className="text-[15px] landing-[21px]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                Understanding color theory: the color wheel and finding
                complementary colors
              </h2>
              <p
                className="text-[12px] landing-[16px]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Dec 30, 2019 05:18
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="relative flex items-start justify-end col-span-1">
              <Image
                src={img1}
                priority
                height={64}
                width={64}
                quality={100}
                alt="morning image"
              />
            </div>
            <div className="flex flex-col col-span-4 gap-1 pr-2">
              <h2
                className="text-[15px] landing-[21px]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                Yo Reddit! What’s a small thing that anyone can do at nearly
                anytime to improve their mood and make
              </h2>
              <p
                className="text-[12px] landing-[16px]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                Dec 4, 2019 05:18
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
