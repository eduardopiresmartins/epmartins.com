import Frame3 from '../imports/Frame3';

export function DrTakedaMockup({ className }: { className?: string }) {
  return (
    <div className={className} style={{ aspectRatio: '1000/723' }}>
      <div className="w-full h-full relative">
        <Frame3 />
      </div>
    </div>
  );
}