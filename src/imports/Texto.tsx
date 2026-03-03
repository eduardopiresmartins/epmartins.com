import img10DeOutubro2021 from "figma:asset/f76e18ee35e2c98f8d6a1ed3945e6749ab6234da.png";

export default function Texto() {
  return (
    <div className="relative size-full" data-name="texto">
      <div className="-translate-y-1/2 absolute flex flex-col font-normal h-[49px] justify-center leading-[0] left-[22px] text-[30px] text-white top-[114.5px] w-[558px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">10 soft-skills para profissionais de T.I</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-light h-[101px] justify-center leading-[0] left-[22px] text-[18px] text-[rgba(255,255,255,0.8)] top-[191.5px] w-[488px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">É muito comum ver pessoas em início ou transição de carreira, com dúvidas sobre o que estudar e em que se aprofundar para se tornar ...</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-center bg-clip-text bg-cover bg-no-repeat flex flex-col h-[13px] justify-center leading-[0] left-[19px] not-italic text-[16px] text-[transparent] top-[6.5px] w-[182px]" style={{ backgroundImage: `url('${img10DeOutubro2021}')` }}>
        <p className="leading-[normal] whitespace-pre-wrap">10 de Outubro, 2021</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] h-[43px] items-center justify-center left-[calc(50%-219.5px)] px-[4px] py-[8px] rounded-[8px] top-[calc(50%+121px)] w-[141px]" data-name="Botão Ver mais">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-1 flex flex-col font-normal h-[22px] justify-center ml-0 mt-0 relative row-1 text-[18px] text-white w-[73px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5] whitespace-pre-wrap">Ler mais</p>
          </div>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="arrow-right">
              <rect fill="url(#paint0_linear_218_1301)" height="20" rx="3" width="20" />
              <path d="M5.5 10.5H14.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 5.5L14.5 10.5L9.5 15.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_218_1301" x1="0.5" x2="20.5" y1="0.5" y2="0.5">
                <stop stopColor="#9933FF" />
                <stop offset="1" stopColor="#F900F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}