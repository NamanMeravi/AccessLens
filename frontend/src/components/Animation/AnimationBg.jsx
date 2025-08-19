import DotGrid from "./DotGrid";

const SquaresBg = ({ children }) => {
  return (
    <div className="w-screen h-screen relative bg-[#0c111b]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block z-[1000]">
        {children}
      </div>
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#0e0c17e2"
        activeColor="#3e3469"
        proximity={120}
        shockRadius={50}
        shockStrength={1}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

export default SquaresBg;
