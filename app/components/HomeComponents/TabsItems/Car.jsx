import { useState } from "react";

import Image from "next/image";

// Car collection images and names
const carImages = [
  { src: "/images/Home/tabs/car/img.png", name: "convertible" },
  { src: "/images/Home/tabs/car/img1.png", name: "Wagon" },
  { src: "/images/Home/tabs/car/img2.png", name: "Commercial" },
  { src: "/images/Home/tabs/car/img4.png", name: "Hatchback" },
  { src: "/images/Home/tabs/car/img5.png", name: "Coupe" },
  { src: "/images/Home/tabs/car/img6.png", name: "Ute" },
  { src: "/images/Home/tabs/car/image3.png", name: "Sedan" },
  { src: "/images/Home/tabs/car/img7.png", name: "SUV" },
];

// Brand collection images
const brandImages = [
  { src: "/images/Home/tabs/brand/brand.png" },
  { src: "/images/Home/tabs/brand/brand1.png" },
  { src: "/images/Home/tabs/brand/brand2.png" },
  { src: "/images/Home/tabs/brand/brand3.png" },
  { src: "/images/Home/tabs/brand/brand4.png" },
  { src: "/images/Home/tabs/brand/brand5.png" },
  { src: "/images/Home/tabs/brand/brand6.png" },
  { src: "/images/Home/tabs/brand/brand7.png" },
];

const Car = () => {
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(null);
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {carImages.map((car, index) => (
          <div
            key={index}
            onClick={() => setSelectedCarIndex(index)}
            style={{
              background: selectedCarIndex === index ? "#39000099" : "#ffffff",
              height: "90px",
              width: "90px",
              borderRadius: "10px",
              border: "1px solid #BEBEC3",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              opacity: selectedCarIndex === index ? 0.7 : 1,
              cursor: "pointer",
              position: "relative", // Ensure positioning for the SVG
            }}
          >
            <Image
              src={car.src}
              width={74}
              height={48}
              priority
              quality={100}
              alt={`Car image ${index + 1}`}
            />
            <div
              className="text-center text-[10px]"
              style={{
                color: selectedCarIndex === index ? "#ffffff" : "#000000",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              {car.name}
            </div>
            {selectedCarIndex === index ? (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5.82993L7.50918 11.3391L15.9289 2"
                    stroke="white"
                    strokeWidth="2.5427"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>

      {/* Brand Collection */}
      <div className="flex flex-wrap gap-4 mt-5">
        {brandImages.map((brand, index) => (
          <div
            key={index}
            onClick={() => setSelectedBrandIndex(index)}
            style={{
              background:
                selectedBrandIndex === index ? "#39000099" : "#ffffff",
              height: "90px",
              width: "90px",
              borderRadius: "10px",
              border: "1px solid #BEBEC3",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              cursor: "pointer",
              opacity: selectedBrandIndex === index ? 0.7 : 1,
            }}
          >
            <Image
              src={brand.src}
              width={74}
              height={48}
              priority
              quality={100}
              alt={`Brand image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car;
