import { useState } from "react";

import Button from "./components/atomic/button";
import Container from "./components/atomic/container";
import ConfigModal from "./modals/ConfigModal";

function App() {
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);
  return (
    <>
      <Container>
        <Button
          message={"Configuración"}
          type={"primary"}
          click={() => setIsConfigModalOpen(true)}
        />

        <ConfigModal
          isOpen={isConfigModalOpen}
          onClose={() => setIsConfigModalOpen(false)}
        />
      </Container>
    </>
  );
}

export default App;
