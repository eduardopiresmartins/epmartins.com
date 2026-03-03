import svgPaths from "./svg-h0eoz96ald";
import imgScreen from "figma:asset/728fa4387ade45506344b1eb0b590cfcca5eccf6.png";
import imgScreen1 from "figma:asset/645bdcf5f02a93e5c1e9caeb69f94c98d7d32f94.png";
import imgKeyboard from "figma:asset/da4bfaf047463611b9994a0e280e741457106a2c.png";
import imgNotch from "figma:asset/b3549814e3742b141fbb7544a6464a653d1ae016.png";
import imgFrame3 from "figma:asset/9122e0313f8e7d75a0653d78a0629273b55d70a7.png";
import { imgYourScreenHere, imgYourScreenHere1 } from "./svg-9m9kf";

function Group() {
  return (
    <div className="absolute contents left-[212px] top-[237px]">
      <div className="absolute bg-[rgba(196,196,196,0.25)] h-[51px] left-[212px] rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[237px] w-[656px]" />
      <div className="absolute inset-[22.69%_71.85%_74.07%_24.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <path d={svgPaths.p168fb780} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex flex-col h-[27px] justify-center leading-[0] left-[560.5px] not-italic text-[30px] text-center text-white top-[262.5px] tracking-[0.6px] translate-x-[-50%] translate-y-[-50%] w-[541px]" style={{ fontFamily: 'Saira, sans-serif' }}>
        <p className="leading-[normal]">https://drflaviotakeda.com.br</p>
      </div>
    </div>
  );
}

function Sensors() {
  return (
    <div className="absolute h-[7.697px] left-[112.25px] top-[7.38px] w-[58.369px]" data-name="Sensors">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 8">
        <g id="Sensors">
          <path clipRule="evenodd" d={svgPaths.p1d433200} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Sensor" />
          <path clipRule="evenodd" d={svgPaths.p27b9a000} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Sensor_2" />
          <circle cx="30.1469" cy="3.84875" fill="url(#paint0_radial_13_2480)" id="Camera" r="2.24499" stroke="url(#paint1_linear_13_2480)" strokeWidth="1.28285" />
          <path clipRule="evenodd" d={svgPaths.p306f4b00} fill="var(--fill-0, #0E0E0E)" fillRule="evenodd" id="Sensor_3" />
          <path clipRule="evenodd" d={svgPaths.p1bc83800} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Sensor_4" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(30.1469 3.84874) rotate(90) scale(1.60356)" gradientUnits="userSpaceOnUse" id="paint0_radial_13_2480" r="1">
            <stop stopColor="#2B3B66" />
            <stop offset="1" stopColor="#1C2436" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_13_2480" x1="28.5434" x2="32.4128" y1="2.24518" y2="3.7567">
            <stop stopColor="#121212" />
            <stop offset="1" stopColor="#232323" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Base() {
  return (
    <div className="absolute contents left-[3.21px] top-[3.21px]" data-name="Base">
      <div className="absolute h-[360.481px] left-[3.21px] rounded-[9.621px] top-[3.21px] w-[278.379px]" data-name="Base">
        <div aria-hidden="true" className="absolute border-[#242424] border-[2.566px] border-solid inset-[-2.566px] pointer-events-none rounded-[12.187px] shadow-[-0.641px_-0.641px_0px_0px_rgba(255,255,255,0.3)]" />
      </div>
      <Sensors />
    </div>
  );
}

function YourScreenHere() {
  return (
    <div className="absolute h-[328.41px] left-[19.24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[246.307px_328.41px] top-[19.24px] w-[246.307px]" data-name="Your Screen Here" style={{ maskImage: `url('${imgYourScreenHere}')` }}>
      <div className="absolute inset-0" data-name="Screen" />
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreen} />
    </div>
  );
}

function Screen() {
  return (
    <div className="absolute contents left-[19.24px] top-[19.24px]" data-name="Screen">
      <YourScreenHere />
      <div className="absolute h-[328.41px] left-[19.24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[246.307px_328.41px] mix-blend-overlay top-[19.24px] w-[246.307px]" data-name="Reflex" style={{ maskImage: `url('${imgYourScreenHere}')` }} />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute contents left-[244.38px] top-[-0.64px]" data-name="Buttons">
      <div className="absolute h-[0.962px] left-[244.38px] rounded-[0.321px] top-[-0.64px] w-[14.753px]" data-name="Power">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.321px_0.321px_0px_inset_rgba(0,0,0,0.5)]" />
      </div>
      <div className="absolute flex h-[12.829px] items-center justify-center left-[283.83px] top-[32.07px] w-[0.962px]" style={{ "--transform-inner-width": "12.828125", "--transform-inner-height": "0.953125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[0.962px] relative rounded-[0.321px] w-[12.829px]" data-name="Volume Up">
            <div className="absolute inset-0 pointer-events-none shadow-[0.321px_0px_0.321px_0px_inset_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[12.829px] items-center justify-center left-[283.83px] top-[48.11px] w-[0.962px]" style={{ "--transform-inner-width": "12.828125", "--transform-inner-height": "0.953125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[0.962px] relative rounded-[0.321px] w-[12.829px]" data-name="Volume Down">
            <div className="absolute inset-0 pointer-events-none shadow-[0.321px_0px_0.321px_0px_inset_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IPad() {
  return (
    <div className="absolute h-[366.254px] left-[653px] top-[357px] w-[284.793px]" data-name="iPad">
      <div className="absolute bg-black blur-[9.948px] filter h-[5.306px] left-[-0.08px] mix-blend-overlay rounded-[212.234px] top-[363.07px] w-[283.863px]" />
      <Base />
      <Screen />
      <Buttons />
    </div>
  );
}

function Base1() {
  return (
    <div className="absolute h-[320.713px] left-[47.14px] top-[3.21px] w-[493.897px]" data-name="Base">
      <div className="absolute inset-[-1%_-0.52%_-0.8%_-0.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 327">
          <g id="Base">
            <g filter="url(#filter0_d_13_2489)" id="Base_2">
              <rect fill="url(#paint0_linear_13_2489)" height="320.713" rx="9.62138" width="493.897" x="3.20713" y="3.20713" />
              <rect height="323.278" rx="10.9042" stroke="url(#paint1_linear_13_2489)" strokeWidth="2.5657" width="496.463" x="1.92428" y="1.92428" />
            </g>
            <circle cx="250.156" cy="11.2253" fill="url(#paint2_radial_13_2489)" id="Camera" r="2.24499" stroke="url(#paint3_linear_13_2489)" strokeWidth="1.28285" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="326.485" id="filter0_d_13_2489" width="499.67" x="-1.19209e-07" y="-1.19209e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.641425" dy="-0.641425" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_13_2489" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_13_2489" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_13_2489" x1="3.20713" x2="250.156" y1="3.20713" y2="163.563">
              <stop stopColor="#2C2C2C" />
              <stop offset="1" stopColor="#121212" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_13_2489" x1="3.20713" x2="250.156" y1="3.20713" y2="163.563">
              <stop stopColor="#242424" />
              <stop offset="1" stopColor="#1A1A1A" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(250.156 11.2253) rotate(90) scale(1.60356)" gradientUnits="userSpaceOnUse" id="paint2_radial_13_2489" r="1">
              <stop stopColor="#2B3B66" />
              <stop offset="1" stopColor="#1C2436" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_13_2489" x1="248.552" x2="252.422" y1="9.62169" y2="11.1332">
              <stop stopColor="#121212" />
              <stop offset="1" stopColor="#232323" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function YourScreenHere1() {
  return (
    <div className="absolute h-[288.641px] left-[63.18px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[461.826px_288.641px] top-[19.24px] w-[461.826px]" data-name="Your Screen Here" style={{ maskImage: `url('${imgYourScreenHere1}')` }}>
      <div className="absolute inset-0" data-name="Screen" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[537.62%] left-0 max-w-none top-[-0.2%] w-full" src={imgScreen1} />
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute contents left-[63.18px] top-[19.24px]" data-name="Screen">
      <YourScreenHere1 />
      <div className="absolute h-[288.641px] left-[63.18px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[461.826px_288.641px] mix-blend-overlay top-[19.24px] w-[461.826px]" data-name="Reflex" style={{ maskImage: `url('${imgYourScreenHere1}')` }} />
    </div>
  );
}

function Keyboard() {
  return (
    <div className="absolute contents left-0 top-[323.92px]" data-name="Keyboard">
      <div className="absolute h-[14.111px] left-0 pointer-events-none rounded-bl-[10.263px] rounded-br-[10.263px] rounded-tl-[1.283px] rounded-tr-[1.283px] top-[323.92px] w-[588.187px]" data-name="Keyboard">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-bl-[10.263px] rounded-br-[10.263px] rounded-tl-[1.283px] rounded-tr-[1.283px] size-full" src={imgKeyboard} />
        <div className="absolute inset-0 shadow-[0px_-5.773px_1.283px_0px_inset_rgba(0,0,0,0.4),0.641px_0.641px_0px_0px_inset_rgba(255,255,255,0.2)]" />
      </div>
      <div className="absolute h-[5.773px] left-[252.4px] rounded-bl-[2.886px] rounded-br-[2.886px] rounded-tl-[0.321px] rounded-tr-[0.321px] top-[323.92px] w-[83.385px]" data-name="Notch">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[2.886px] rounded-br-[2.886px] rounded-tl-[0.321px] rounded-tr-[0.321px] size-full" src={imgNotch} />
      </div>
    </div>
  );
}

function Macbook() {
  return (
    <div className="absolute h-[338.031px] left-[142px] top-[385px] w-[588.187px]" data-name="Macbook">
      <div className="absolute bg-black blur-[9.948px] filter h-[5.306px] left-[0.08px] mix-blend-overlay rounded-[212.234px] top-[334.85px] w-[588.153px]" />
      <Base1 />
      <Screen1 />
      <Keyboard />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame3} />
      <Group />
      <IPad />
      <Macbook />
    </div>
  );
}
