import React from "react";

const CommonButton = () => {
  return (
    <div className="flex gap-4 mt-4">
      <button className="flex flex-row items-center justify-start h-[48px] w-[150px] rounded-lg border-2 border-[#D8DEE9] bg-[#F7F8FA] p-2 gap-3">
        <svg
          width="34"
          height="35"
          viewBox="0 0 34 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.589 15.6146C29.7345 16.4679 29.7345 18.3897 28.6607 19.2431L25.6387 20.9544L21.1602 17.4289L25.6497 13.9706L28.589 15.6146Z"
            fill="#FFC801"
          />
          <path
            d="M25.6604 20.9377L25.6597 20.9371H25.6591L21.1544 17.4308L21.153 17.4294L21.1524 17.4301L21.1504 17.4281L21.1345 17.4401L4.54688 30.0739V30.6018C4.54681 31.2993 4.71004 32.0432 5.26705 32.3015C6.00097 32.6418 7.07177 31.9766 7.07177 31.9766L25.6604 20.9377Z"
            fill="#F93647"
          />
          <path
            d="M21.1345 17.4401L4.54688 30.0739V4.52338L21.1305 17.4348L21.1345 17.4401Z"
            fill="#00D3FF"
          />
          <path
            d="M4.54688 4.26773V4.5234L21.1304 17.4348L21.1345 17.4401L21.1504 17.4281L21.1518 17.4275L21.1584 17.4221L25.6479 13.9899C25.6479 13.9899 11.209 5.35766 7.0233 2.86809C6.84121 2.75978 6.40486 2.48506 5.88164 2.65639C5.25483 2.86171 4.54688 3.60732 4.54688 4.26773Z"
            fill="#00EF77"
          />
        </svg>

        <div className="flex flex-col">
          <p className="text-[11px] text-left font-bold">GET IT ON</p>
          <p className="text-[13px] text-[#090909] font-bold">Google Play</p>
        </div>
      </button>
      <button className="flex flex-row items-center justify-start h-[48px] w-[140px] rounded-lg border-2 border-[#D8DEE9] bg-[#F7F8FA] p-2 gap-3">
        <svg
          width="28"
          height="35"
          viewBox="0 0 28 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.1246 18.5671C23.0814 14.2601 26.6366 12.1942 26.7953 12.0904C24.7977 9.1688 21.6852 8.76792 20.5769 8.72277C17.9307 8.45342 15.4101 10.2817 14.0671 10.2817C12.7274 10.2817 10.6529 8.76193 8.45823 8.80036C5.57038 8.84359 2.90939 10.4801 1.42327 13.065C-1.57521 18.2663 0.656596 25.9753 3.57822 30.1974C5.00692 32.2605 6.71029 34.5828 8.94483 34.4977C11.099 34.4127 11.9123 33.1041 14.5159 33.1041C17.1196 33.1041 17.8512 34.4977 20.1296 34.4539C22.4458 34.412 23.9143 32.3509 25.3315 30.2791C26.9709 27.8819 27.6464 25.561 27.6862 25.4429C27.6361 25.4198 23.171 23.709 23.1246 18.5671ZM18.8432 5.92869C20.0283 4.48986 20.8313 2.49024 20.6134 0.5C18.9026 0.569462 16.832 1.63718 15.6044 3.07468C14.5043 4.3502 13.542 6.38086 13.7998 8.33526C15.7076 8.48312 17.654 7.36486 18.8432 5.92869Z"
            fill="#40414E"
          />
        </svg>

        <div className="flex flex-col">
          <p className="text-[9px] text-left font-bold">Download on the</p>
          <p className="text-[14px] text-[#090909] font-bold">App Store</p>
        </div>
      </button>
    </div>
  );
};

export default CommonButton;
