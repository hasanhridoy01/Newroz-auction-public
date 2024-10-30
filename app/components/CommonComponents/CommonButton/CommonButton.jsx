import React from "react";

const CommonButton = () => {
  return (
    <div className="flex gap-4 mt-4">
      <button className="flex flex-row items-center justify-start h-[48px] w-[130px] rounded-lg border-2 border-[#D8DEE9] bg-[#F7F8FA] p-2 gap-3">
        <svg
          width="23"
          height="28"
          viewBox="0 0 23 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_1580_25609)">
            <path
              d="M0.856762 2.14432C0.578562 2.44002 0.414062 2.89892 0.414062 3.49312V24.7245C0.414062 25.3197 0.578562 25.7776 0.856762 26.0733L0.927563 26.1424L12.7748 14.2489V14.1088V13.9686L0.927563 2.07422L0.856762 2.14432Z"
              fill="url(#paint0_linear_1580_25609)"
            />
            <path
              d="M16.7218 18.2187L12.7734 14.2529V14.1128V13.9726L16.7228 10.0078L16.8117 10.0587L21.4907 12.7275C22.8267 13.4897 22.8267 14.7368 21.4907 15.5L16.8117 18.1688L16.7218 18.2187Z"
              fill="url(#paint1_linear_1580_25609)"
            />
            <g filter="url(#filter1_d_1580_25609)">
              <path
                d="M16.8118 18.1683L12.7726 14.1133L0.855469 26.0778C1.29537 26.5462 2.02307 26.6038 2.84267 26.1373L16.8118 18.1683Z"
                fill="url(#paint2_linear_1580_25609)"
              />
            </g>
            <path
              d="M16.8118 10.0563L2.84267 2.08831C2.02307 1.62071 1.29537 1.67931 0.855469 2.14781L12.7735 14.1123L16.8118 10.0563Z"
              fill="url(#paint3_linear_1580_25609)"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1580_25609"
              x="0.414062"
              y="0.970625"
              width="22.0781"
              height="26.2838"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.795" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1580_25609"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.795" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1580_25609"
                result="effect2_dropShadow_1580_25609"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1580_25609"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_1580_25609"
              x="0.855469"
              y="13.3183"
              width="15.957"
              height="13.1412"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.795" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1580_25609"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1580_25609"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1580_25609"
              x1="11.7246"
              y1="3.26852"
              x2="-4.38601"
              y2="19.3164"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A0FF" />
              <stop offset="0.0066" stopColor="#00A1FF" />
              <stop offset="0.2601" stopColor="#00BEFF" />
              <stop offset="0.5122" stopColor="#00D2FF" />
              <stop offset="0.7604" stopColor="#00DFFF" />
              <stop offset="1" stopColor="#00E3FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1580_25609"
              x1="23.2297"
              y1="14.1128"
              x2="0.092039"
              y2="14.1128"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE000" />
              <stop offset="0.4087" stopColor="#FFBD00" />
              <stop offset="0.7754" stopColor="#FFA500" />
              <stop offset="1" stopColor="#FF9C00" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1580_25609"
              x1="14.6182"
              y1="16.3154"
              x2="-7.22978"
              y2="38.0785"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1580_25609"
              x1="-2.14583"
              y1="-4.91993"
              x2="7.60987"
              y2="4.79791"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32A071" />
              <stop offset="0.0685" stopColor="#2DA771" />
              <stop offset="0.4762" stopColor="#15CF74" />
              <stop offset="0.8009" stopColor="#06E775" />
              <stop offset="1" stopColor="#00F076" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col">
          <p className="text-[11px] text-left font-bold">GET IT ON</p>
          <p className="text-[13px] text-[#090909] font-bold">Google Play</p>
        </div>
      </button>
      <button className="flex flex-row items-center justify-start h-[48px] w-[130px] rounded-lg border-2 border-[#D8DEE9] bg-[#F7F8FA] p-2 gap-3">
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0168 7.92853C18.0428 5.90053 19.1277 3.98162 20.8487 2.91932C19.763 1.36272 17.9444 0.375724 16.0524 0.316324C14.0344 0.103624 12.0781 1.52852 11.0497 1.52852C10.0015 1.52852 8.41817 0.337425 6.71327 0.372625C4.49097 0.444725 2.41928 1.71313 1.33808 3.66363C-0.986124 7.70323 0.747476 13.64 2.97378 16.9053C4.08768 18.5042 5.38948 20.2903 7.09288 20.2269C8.75978 20.1575 9.38228 19.1599 11.3944 19.1599C13.3878 19.1599 13.9719 20.2269 15.7098 20.1867C17.4984 20.1575 18.6254 18.5806 19.7002 16.9666C20.5005 15.8273 21.1163 14.5681 21.5249 13.2357C19.4229 12.3432 18.0192 10.2196 18.0168 7.92853Z"
            fill="#090909"
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
