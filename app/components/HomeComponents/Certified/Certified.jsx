import "./Certified.css";
import img1 from "../../../../public/images/Home/Car1.png";
import Image from "next/image";

const Certified = () => {
  return (
    <div className="container grid grid-cols-1 gap-6 py-5 pl-5 pr-0 mx-auto my-5 lg:grid-cols-3 mx lg:pl-14 lg:py-10 lg:my-20 lg:pr-14">
      <div className="col-span-1 rounded-xl">
        <div className="w-full h-[682px] apply-bg-linear rounded-xl relative">
          <Image
            src={img1}
            alt="img"
            quality={100}
            className="object-cover rounded-xl"
          />
          <div className="absolute z-40 flex flex-col items-center justify-center transform -translate-y-1/2 lg:top-[79.5%] top-[72%]">
            <h4
              className="text-[32px] landing-[48px] text-[#FFFFFF] text-center"
              style={{ fontFamily: "Poppins", fontWeight: 700 }}
            >
              Why Certification Matters
            </h4>
            <div className="rounded-lg bg-[#DDEBFFCC] border-2 border-[#FFFFFFB2] w-[95%] mt-3">
              <div className="border border-[#DDEBFFCC] px-5 py-3">
                <p
                  className="text-[12px] landing-[18px] text-[#13131A]"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  Minimizes Risk: Protect yourself from unexpected surprises by
                  bidding on fully inspected vehicles.
                </p>
              </div>
              <div className="border border-[#DDEBFFCC] px-5 py-3">
                <p
                  className="text-[12px] landing-[18px] text-[#13131A]"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  Builds Trust: Our certification process provides the assurance
                  buyers need to make informed decisions.
                </p>
              </div>
              <div className="border border-[#DDEBFFCC] px-5 py-3">
                <p
                  className="text-[12px] landing-[18px] text-[#13131A]"
                  style={{ fontFamily: "Poppins", fontWeight: 600 }}
                >
                  Enhances Value: Certified vehicles are often valued higher in
                  the market due to their verified condition and history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <div className="">
          <h3 className="apply-fontFamily text-[24px] landing-[32px] text-[#2E2E3E] font-bold">
            Buy with Confidence:
          </h3>
          <h2 className="apply-fontFamily text-[40px] landing-[40px] text-[#2E2E3E] font-bold uppercase">
            <span className="text-[#D43334]">Certified</span> &{" "}
            <span className="text-[#D43334]">Trusted</span> Vehicles
          </h2>
          <p className="apply-fontFamily text-[16px] landing-[30px] font-medium text-[#2E2E3E] mt-2.5">
            At the Vehicles Auction Platform, we understand that buying a
            vehicle at auction requires trust. That’s why all vehicles listed on
            our platform are rigorously inspected and certified by a renowned,
            independent third-party company. Here’s why you can bid with
            complete confidence:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certified;
