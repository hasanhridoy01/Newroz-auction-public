"use client";

import "./TabsItems.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Car from "./Car";
import Bike from "./Bike";
import Vespa from "./Vespa";

const TabsItems = () => {
  return (
    <div className="container relative px-5 mx-auto lg:px-14">
      {/* Tabs & Search Section */}
      <div className="apply-backGround h-[530px] lg:flex flex-col hidden items-center justify-start p-5 pt-10 border mb-6">
        
        <div
          className="py-5 text-[24px] landing-[36px] text-center text-[#E93839]"
          style={{ fontFamily: "Poppins", fontWeight: 500 }}
        >
          <h4>Search your convenience vehicle</h4>
        </div>

        {/* Item Tabs */}
        <Tabs defaultValue="Car" className="w-full">
          <TabsList className="grid w-[400px] grid-cols-3 mx-auto">
            <TabsTrigger value="Car">Car</TabsTrigger>
            <TabsTrigger value="Bike">Bike</TabsTrigger>
            <TabsTrigger value="Vespa">Vespa</TabsTrigger>
          </TabsList>

          {/* Car Collection */}
          <TabsContent value="Car" className="mt-14">
            <Car />
          </TabsContent>

          {/* Other Tab Contents */}
          <TabsContent value="Bike">
            <Bike />
          </TabsContent>
          <TabsContent value="Vespa">
            <Vespa />
          </TabsContent>
        </Tabs>

        {/* Search Field */}
        <div className="relative mt-10 w-[349px]">
          <input
            className="w-full h-[48px] rounded-[48px] border border-[#CCD7E7] py-[12px] px-[16px] pr-[48px] bg-[#FFFFFF] outline-none"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#555555",
            }}
            type="text"
            placeholder="Find by keyword"
          />
          <div className="absolute transform -translate-y-1/2 right-4 top-1/2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C17.2467 21 21.5 16.7467 21.5 11.5C21.5 6.25329 17.2467 2 12 2C6.75329 2 2.5 6.25329 2.5 11.5C2.5 16.7467 6.75329 21 12 21Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 22L20.5 20"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Apply All Cars & Bike & Vespa */}
      <div className="mt-10 lg:hidden">
        <h4 className="text-[24px] landing-[36px] text-center text-[#E93839]" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>Find your convenience vehicle</h4>
      </div>
      
      {/* Show All Car & Bike & Vespa */}
      <div className="grid grid-cols-1 gap-4 mt-6 mb-5 lg:grid-cols-4 lg:mt-8">
        <div className="p-4 bg-gray-100 h-[243px]">Column 1</div>
        <div className="p-4 bg-gray-100 h-[243px]">Column 2</div>
        <div className="p-4 bg-gray-100 h-[243px]">Column 3</div>
        <div className="p-4 bg-gray-100 h-[243px]">Column 4</div>
      </div>

      
    </div>
  );
};

export default TabsItems;
