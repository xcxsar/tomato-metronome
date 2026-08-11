import Title from "../atomic/title";

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-row w-full h-16 px-4 items-center justify-between">
        <Title text="Tomato Metronome" />
        {children}
      </div>
    </>
  );
}

export default Navbar;
