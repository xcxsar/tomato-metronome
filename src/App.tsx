import { useState } from "react";

import Button from "./components/button";
import Container from "./components/container";
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
