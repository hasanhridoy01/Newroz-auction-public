import "./HowItWorks.css";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabsExtra";

//components images
import buysImages from "../../../../public/images/Home/buys&sellers/ForBuyers.png";
import sellersImages from "../../../../public/images/Home/buys&sellers/ForSellers.png";
import Image from "next/image";
import CommonButton from "../../CommonComponents/CommonButton/CommonButton";

const HowItWorks = () => {
  return (
    <div className="lg:flex hidden h-[568px] w-full items-start container relative mx-auto mb-10 px-14 mt-24">
      <Tabs defaultValue="For Buyers" className="w-full">
        {/* Tabs list with two triggers */}
        <TabsList className="grid w-[365px] grid-cols-2">
          <TabsTrigger value="For Buyers" className="tabs">
            For Buyers
          </TabsTrigger>
          <TabsTrigger value="For Sellers">For Sellers</TabsTrigger>
        </TabsList>

        {/* Content for each tab */}
        <TabsContent
          value="For Buyers"
          className="rounded-e-2xl content-bgColor rounded-bl-2xl"
        >
          <div className="h-[510px] p-8 w-full flex gap-2 items-center">
            <div className="w-[75%]">
              <h5
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 900,
                  fontSize: "20px",
                  lineHeight: "20px",
                  color: "#2E2E3E",
                  textTransform: "uppercase",
                }}
              >
                as a Buyer,
              </h5>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 900,
                  fontSize: "48px",
                  lineHeight: "60px",
                  color: "#A52828",
                  textTransform: "uppercase",
                }}
              >
                How It Works ?
              </h2>
              <div className="mt-2.5">
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#2E2E3E",
                  }}
                >
                  1. Register & Explore as a buyer
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
                    Sign up for free and gain instant access to a wide range of
                    vehicles including cars, bikes, and Vespas.
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
                    Browse detailed listings and use our advanced filters to
                    find the perfect vehicle for you.
                  </li>
                </ul>
              </div>
              <div className="mt-2.5">
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#2E2E3E",
                  }}
                >
                  2. Place Your Bid
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
                    Once you find a vehicle you like, place your bid. You can
                    also set a maximum bid and let the system automatically bid
                    on your behalf.
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
                    Track the auction in real-time with live updates and
                    notifications if you’re outbid.
                  </li>
                </ul>
              </div>
              <div className="mt-2.5">
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#2E2E3E",
                  }}
                >
                  3. Win & Pay
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
                    If your bid wins the auction, simply complete the payment
                    securely within the platform.
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
                    Receive all necessary documents and coordinate delivery or
                    pick-up with the seller.
                  </li>
                </ul>
              </div>

              {/* Grab the opportunity */}
              <button
                className="h-[58px] w-[226px] rounded-[500px] border border-[#D43334] bg-[#E93839] mt-6"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "17px",
                  lineHeight: "21px",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Grab the opportunity
              </button>
            </div>
            <div className="w-[25%]">
              <Image
                src={buysImages}
                height={357}
                width={357}
                quality={100}
                priority
                alt="buys images"
              />
              <CommonButton />
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="For Sellers"
          className="rounded-bl-2xl content-bgColor rounded-e-2xl"
        >
          <div className="h-[510px] p-8 w-full flex gap-2 items-center relative">
            <div className="w-[75%]">
              <h5
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 900,
                  fontSize: "20px",
                  lineHeight: "20px",
                  color: "#2E2E3E",
                  textTransform: "uppercase",
                }}
              >
                as a Seller,
              </h5>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 900,
                  fontSize: "48px",
                  lineHeight: "60px",
                  color: "#A52828",
                  textTransform: "uppercase",
                }}
              >
                How It Works ?
              </h2>
              <div className="mt-2.5">
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#2E2E3E",
                  }}
                >
                  1. Register & List Your Vehicle
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
                    Sign up as a seller & start listing vehicles in minutes.
                    Upload detailed descriptions, high-quality photos, & set
                    your reserve price.
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
                    Choose auction timings and let potential buyers view and bid
                    on your listings.
                  </li>
                </ul>
              </div>
              <div className="mt-2.5">
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#2E2E3E",
                  }}
                >
                  2. Monitor Bid
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
                    Watch as bids roll in, receive notifications on activity,
                    and manage your auctions through your seller dashboard.
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
                    Engage with buyers directly if they have any inquiries.
                  </li>
                </ul>
              </div>
              <div className="mt-2.5">
                <h2
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#2E2E3E",
                  }}
                >
                  3. Sell & Get Paid
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
                    When the auction ends, finalize the sale with the highest
                    bidder and receive secure payment.
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
                    Provide documentation and arrange delivery or pick-up with
                    the buyer.
                  </li>
                </ul>
              </div>

              {/* Start Selling Now */}
              <button
                className="h-[58px] w-[226px] rounded-[500px] border border-[#D43334] bg-[#E93839] mt-6"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "17px",
                  lineHeight: "21px",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Start Selling Now
              </button>
            </div>
            <div className="w-[25%] absolute right-0">
              <Image
                src={sellersImages}
                height={413}
                width={374}
                quality={100}
                priority
                alt="buys images"
              />
              <CommonButton />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HowItWorks;
