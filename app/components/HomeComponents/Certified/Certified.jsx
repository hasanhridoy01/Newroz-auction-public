import "./Certified.css";
import img1 from "../../../../public/images/Home/Car1.png";
import Image from "next/image";

const Certified = () => {
  return (
    <div className="container grid grid-cols-1 gap-4 py-5 pl-5 pr-0 mx-auto my-5 lg:gap-5 lg:grid-cols-3 mx lg:pl-14 lg:py-10 lg:my-10 lg:pr-14">
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
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 mt-7">
          <div className="h-[60px] w-[145px] rounded-[12px] p-3.5 bg-[#F3F6FA] border border-[#F3F6FA] flex gap-2 items-center">
            <h3 className="apply-fontFamily text-[20px] text-[#E93839] font-bold landing-[30px]">
              2943
            </h3>
            <h2 className="apply-fontFamily text-[13px] text-[#2E2E3E] font-bold landing-[6px]">
              Happy User
            </h2>
          </div>
          <div className="h-[60px] w-[145px] rounded-[12px] p-3.5 bg-[#F3F6FA] border border-[#F3F6FA] flex gap-2 items-center">
            <h3 className="apply-fontFamily text-[20px] text-[#E93839] font-bold landing-[30px]">
              $0.8M
            </h3>
            <h2 className="apply-fontFamily text-[13px] text-[#2E2E3E] font-bold landing-[6px]">
              Vehicle Sold
            </h2>
          </div>
          <div className="h-[60px] w-[145px] rounded-[12px] p-3.5 bg-[#F3F6FA] border border-[#F3F6FA] flex gap-2 items-center">
            <h3 className="apply-fontFamily text-[20px] text-[#E93839] font-bold landing-[30px]">
              4.8★
            </h3>
            <h2 className="apply-fontFamily text-[13px] text-[#2E2E3E] font-bold landing-[6px]">
              User Review
            </h2>
          </div>
        </div>
      </div>

      <div className="col-span-2 pr-3 mt-6 lg:pr-0 lg:mt-0">
        <div className="">
          <h3 className="apply-fontFamily lg:text-[24px] text-[18px] landing-[32px] text-[#2E2E3E] font-bold">
            Buy with Confidence:
          </h3>
          <h2 className="apply-fontFamily lg:text-[40px] text-[18px] landing-[40px] text-[#2E2E3E] font-bold uppercase lg:mt-0 mt-2">
            <span className="text-[#D43334]">Certified</span> &{" "}
            <span className="text-[#D43334]">Trusted</span> Vehicles
          </h2>
          <p className="apply-fontFamily text-[16px] landing-[30px] font-[400] text-[#2E2E3E] mt-2.5">
            At the Vehicles Auction Platform, we understand that buying a
            vehicle at auction requires trust. That’s why all vehicles listed on
            our platform are rigorously inspected and certified by a renowned,
            independent third-party company. Here’s why you can bid with
            complete confidence:
          </p>
          <div className="mt-6 lg:mt-2">
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#2E2E3E",
              }}
            >
              Comprehensive Vehicle Inspection:
            </h2>
            <ul className="mt-2 ml-3">
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
              >
                Each vehicle undergoes a detailed multi-point inspection
                covering all major components, including engine, transmission,
                body condition, brakes, and more.
              </li>
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
                className="mt-1"
              >
                Receive a thorough inspection report, so you know exactly what
                you're bidding on
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#2E2E3E",
              }}
            >
              Certified Condition Reports:
            </h2>
            <ul className="mt-2 ml-3">
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
              >
                Vehicles are certified by an industry-leading inspection company
                with years of experience.
              </li>
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
                className="mt-1"
              >
                The certification includes a full report on the vehicle’s
                current condition, any past damages, and overall performance
                ratings.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#2E2E3E",
              }}
            >
              Transparent History & Documentation:
            </h2>
            <ul className="mt-2 ml-3">
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
              >
                Access verified documentation such as service history,
                registration, and legal title, giving you full transparency
                before making your decision.
              </li>
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
                className="mt-1"
              >
                You’ll have peace of mind knowing every vehicle meets stringent
                legal and quality standards.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#2E2E3E",
              }}
            >
              Bid Without Worry:
            </h2>
            <ul className="mt-2 ml-3">
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
              >
                Whether you’re buying a car, bike, or Vespa, you can place your
                bids confidently, knowing that every vehicle has been thoroughly
                checked and certified.
              </li>
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
                className="mt-1"
              >
                Enjoy the auction experience with the knowledge that the vehicle
                you’re bidding on meets the condition outlined in the report.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#2E2E3E",
              }}
            >
              Transparent History & Documentation:
            </h2>
            <ul className="mt-2 ml-3">
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
              >
                Access verified documentation such as service history,
                registration, and legal title, giving you full transparency
                before making your decision.
              </li>
              <li
                style={{
                  listStyle: "inside",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#585865",
                }}
                className="mt-1"
              >
                You’ll have peace of mind knowing every vehicle meets stringent
                legal and quality standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
