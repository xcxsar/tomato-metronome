import Header from "../atomic/header";
import IconButton from "../atomic/iconButton";

function TempoSelector() {
  return (
    <>
      <div className="flex flex-row items-center space-x-8">
        <IconButton iconName="minus" click={() => {}} />
        <Header text="120" />
        <IconButton iconName="plus" click={() => {}} />
      </div>
    </>
  );
}

export default TempoSelector;
