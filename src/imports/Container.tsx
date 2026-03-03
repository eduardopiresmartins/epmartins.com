import imgImageEduardoPires from "figma:asset/06024e64242bc12b2a45a9b240e16d6c54f04b14.png";

function ImageEduardoPires() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Image (Eduardo Pires)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[136.52%] left-[0.48%] max-w-none top-[0.37%] w-[99.59%]" src={imgImageEduardoPires} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <ImageEduardoPires />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(134,32,224,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-light leading-[25.5px] left-0 text-[17px] text-white top-[-1px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Eduardo Pires
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[81.563px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute leading-[27.2px] left-0 not-italic text-[#a0a0a0] text-[16px] top-0 w-[532px] whitespace-pre-wrap">Profissional especializado em Produto, com foco em descoberta, design estratégico e entrega de soluções que resolvem problemas reais e geram impacto mensurável.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[119.063px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}