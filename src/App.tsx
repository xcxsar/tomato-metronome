import { useState } from "react";

import Container from "./components/atomic/container";
import ConfigModal from "./modals/ConfigModal";
import Navbar from "./components/composite/navbar";
import IconButton from "./components/atomic/iconButton";
import TempoSelector from "./components/composite/tempoSelector";
import { useMetronome } from "./hooks/useMetronome";
import Button from "./components/atomic/button";

function App() {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);
  const { isPlaying, start, stop, bpm, setBpm } = useMetronome();
  return (
    <>
      <Container>
        <Navbar>
          <IconButton
            iconName="gear"
            click={() => setIsConfigModalOpen(true)}
          />
        </Navbar>
        <div className="flex flex-col h-full items-center place-content-center space-y-4">
          <TempoSelector
            tempo={bpm}
            clickMinus={() => setBpm(bpm - 1)}
            clickPlus={() => setBpm(bpm + 1)}
          />
          <IconButton
            iconName={isPlaying ? "stop" : "play"}
            click={isPlaying ? stop : start}
          />
          <ConfigModal
            isOpen={isConfigModalOpen}
            onClose={() => setIsConfigModalOpen(false)}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
