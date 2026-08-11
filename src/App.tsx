import { useState } from "react";

import Button from "./components/atomic/button";
import Container from "./components/atomic/container";
import ConfigModal from "./modals/ConfigModal";
import Navbar from "./components/composite/navbar";
import IconButton from "./components/atomic/iconButton";

function App() {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);
  return (
    <>
      <Container>
        <Navbar>
          <IconButton
            iconName="gear"
            click={() => setIsConfigModalOpen(true)}
          />
        </Navbar>
        <div className="flex flex-col h-full items-center place-content-center">
          <Button
            message={"Configuración"}
            type={"primary"}
            click={() => setIsConfigModalOpen(true)}
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
