import "./Press.css";
import img from "../../../../public/images/Home/thumb.png";
import Image from "next/image";

const Press = () => {
  return (
    <div className="container px-5 py-5 mx-auto lg:px-14 lg:py-10">
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
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="lg:hidden">
          <h2 className="apply-fontFamily text-[32px] landing-[48px] text-[#222222] font-semibold">
            Good morning
          </h2>
          <h5 className="apply-fontFamily text-[14px] landing-[21px] text-[#222222] font-medium">
            Monday, December 25, 2024
          </h5>
        </div>
        <div className="relative grid grid-cols-1 gap-4 p-2 lg:grid-cols-2">
          <div className="relative">
            <Image src={img} alt="image" priority quality={100} />
          </div>
          <div className="relative">
            <p className="apply-fontFamily text-[13px] landing-[21px] font-medium">
              Yang guys bid on a car and he wins the auction. He arrange aar
              handover ceremony.{" "}
            </p>
            <p className="apply-fontFamily text-[13px] landing-[21px] font-light mt-2">
              Car handover ceremony. Yang guys bid on a car and he wins the
              auction. Finally, after checking and obtaining documentation, The
              happy customer received the car key.
            </p>
            <p className="apply-fontFamily text-[13px] landing-[21px] font-light mt-2 mb-12">
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
        <div className="hidden p-2 overflow-y-hidden border lg:flex">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae
            earum sint maxime enim praesentium hic illo non sit animi ad
            perspiciatis commodi nostrum laborum laudantium aspernatur accusamus
            rerum obcaecati, accusantium adipisci minus sequi necessitatibus
            dignissimos. Ad aperiam earum sequi facilis, placeat pariatur
            debitis tempora officiis. Asperiores, ullam facilis culpa aperiam,
            consequatur nostrum optio quibusdam repudiandae, quia ipsa nemo fuga
            minus! Velit, aperiam. Possimus incidunt molestiae blanditiis
            reiciendis numquam repellendus quidem debitis iusto libero eveniet,
            quod consectetur pariatur cum praesentium tempore id est quisquam,
            inventore vero consequuntur eos exercitationem, minus hic illum!
            Minus, explicabo quia quos dicta voluptatum fugiat itaque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Press;
