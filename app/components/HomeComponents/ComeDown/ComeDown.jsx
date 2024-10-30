import "./ComeDown.css";
import { useEffect, useState } from "react";

const ComeDown = ({ value, label }) => {
  const [countdown, setCountdown] = useState({
    days: value,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date(Date.now() + value * 24 * 60 * 60 * 1000); // value in days
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      console.log("Countdown values:", { days, hours, minutes });
      setCountdown({ days, hours, minutes });
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, [value]);

  return (
    <div className="h-[42px] w-[35px] rounded-[6px] py-[3px] px-[3px] bg-[#FAFAFA] transition-transform duration-500 ease-in-out transform hover:scale-105">
      <h4
        className="text-[12px] leading-[18px] text-center text-[#E93839]"
        style={{ fontFamily: "Poppins", fontWeight: 600 }}
      >
        {countdown.days}
      </h4>
      <p
        className="text-[12px] leading-[18px] text-center text-[#969696]"
        style={{ fontFamily: "Poppins", fontWeight: 600 }}
      >
        {label}
      </p>
    </div>
  );
};

export default ComeDown;
