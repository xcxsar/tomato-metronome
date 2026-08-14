import Header from "../atomic/header";
import IconButton from "../atomic/iconButton";

interface TempoSelectorProps {
  tempo: number;
  clickPlus: () => void;
  clickMinus: () => void;
}

function TempoSelector({ tempo, clickPlus, clickMinus }: TempoSelectorProps) {
  return (
    <>
      <div className="flex flex-row items-center space-x-8">
        <IconButton iconName="minus" click={clickMinus} />
        <Header text={tempo.toString()} />
        <IconButton iconName="plus" click={clickPlus} />
      </div>
    </>
  );
}

export default TempoSelector;
