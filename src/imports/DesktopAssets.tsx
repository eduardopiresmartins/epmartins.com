import clsx from "clsx";
import svgPaths from "./svg-llq25wxba2";
type DesktopAssetsBackgroundImage1Props = {
  additionalClassNames?: string;
};

function DesktopAssetsBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<DesktopAssetsBackgroundImage1Props>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[163.423px] items-center justify-center w-[38.529px]", additionalClassNames)}>
      <div className="flex-none rotate-[93.9deg] scale-y-99 skew-x-[7.74deg]">{children}</div>
    </div>
  );
}
type DesktopAssetsBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DesktopAssetsBackgroundImageAndText({ text, additionalClassNames = "" }: DesktopAssetsBackgroundImageAndTextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-light h-[15.675px] justify-center leading-[0] text-[10px] text-center text-white top-[20.57px] w-[36.58px]", additionalClassNames)}>
      <p className="leading-[1.5] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type DesktopAssetsBackgroundImageProps = {
  additionalClassNames?: string;
};

function DesktopAssetsBackgroundImage({ additionalClassNames = "" }: DesktopAssetsBackgroundImageProps) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[5.878px] items-center justify-center left-[167.08px] w-[239.256px]", additionalClassNames)}>
      <div className="flex-none rotate-90">
        <div className="bg-gradient-to-b from-[#cecaca] h-[239.256px] rounded-[1px] to-[rgba(27,27,27,0)] w-[5.878px]" />
      </div>
    </div>
  );
}

export default function DesktopAssets() {
  return (
    <div className="relative size-full" data-name="desktop-assets">
      <div className="absolute flex h-[228.991px] items-center justify-center left-[1.94px] top-[76.18px] w-[446.676px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.36deg] skew-x-[-0.72deg]">
          <div className="border border-[#93f] border-solid h-[226.223px] rounded-[8px] w-[445.25px]" />
        </div>
      </div>
      <div className="absolute flex h-[246.898px] items-center justify-center left-[36.21px] top-[91.09px] w-[446.789px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.36deg] skew-x-[-0.72deg]">
          <div className="border border-solid border-white h-[244.13px] rounded-[8px] w-[445.25px]" />
        </div>
      </div>
      <div className="absolute h-[227.487px] left-0 rounded-[8px] top-[51.92px] w-[421.169px]" style={{ backgroundImage: "linear-gradient(220.496deg, rgb(27, 27, 27) 16.011%, rgba(27, 27, 27, 0) 82.032%)" }} />
      <div className="absolute bg-[#292929] h-[24.493px] left-[166.09px] rounded-[5px] shadow-[0px_4px_4px_0px_black] top-[59.76px] w-[238.267px]" />
      <div className="absolute bg-[#292929] h-[97.971px] left-[166.1px] rounded-[5px] shadow-[0px_4px_4px_0px_black] top-[90.13px] w-[238.267px]" />
      <div className="absolute h-[41.148px] left-0 rounded-[8px] top-0 w-[421.169px]" style={{ backgroundImage: "linear-gradient(223.215deg, rgb(27, 27, 27) 2.2322%, rgba(27, 27, 27, 0) 97.397%)" }} />
      <DesktopAssetsBackgroundImage1 additionalClassNames="left-[101.76px] top-[65.96px]">
        <div className="h-[27.565px] rounded-[5px] w-[161.956px]" style={{ backgroundImage: "linear-gradient(150.491deg, rgb(153, 51, 255) 39.782%, rgb(249, 0, 241) 117.8%)" }} />
      </DesktopAssetsBackgroundImage1>
      <DesktopAssetsBackgroundImage additionalClassNames="top-[201.82px]" />
      <DesktopAssetsBackgroundImage additionalClassNames="top-[213.58px]" />
      <DesktopAssetsBackgroundImage additionalClassNames="top-[225.33px]" />
      <DesktopAssetsBackgroundImage1 additionalClassNames="left-[63.53px] top-[69.28px]">
        <div className="h-[27.565px] rounded-[5px] w-[161.956px]" style={{ backgroundImage: "linear-gradient(153.176deg, rgb(153, 51, 255) 5.2143%, rgb(180, 37, 251) 27.906%, rgb(249, 0, 241) 112.78%)" }} />
      </DesktopAssetsBackgroundImage1>
      <DesktopAssetsBackgroundImageAndText text="Home" additionalClassNames="left-[124.08px]" />
      <DesktopAssetsBackgroundImageAndText text="About" additionalClassNames="left-[210.09px]" />
      <DesktopAssetsBackgroundImageAndText text="Contact" additionalClassNames="left-[296.1px]" />
      <div className="absolute inset-[19.71%_61.72%_76.81%_35.82%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8639 11.7565">
          <path d={svgPaths.p3bd4c580} fill="url(#paint0_linear_210_93)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_210_93" x1="5.93195" x2="5.93195" y1="0" y2="11.7565">
              <stop stopColor="#9933FF" />
              <stop offset="1" stopColor="#F900F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}