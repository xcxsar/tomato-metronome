import Label from "../components/atomic/label";
import Button from "../components/atomic/button";
import Dropdown, { type DropdownItem } from "../components/composite/dropdown";
import BaseModal from "./BaseModal";

import { useTheme } from "../hooks/useTheme";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConfigModal({ isOpen, onClose }: ConfigModalProps) {
  const { theme, changeTheme } = useTheme();

  const ThemesDropdownItems: DropdownItem[] = [
    {
      name: "Claro",
      action: () => {
        changeTheme("light");
      },
    },
    {
      name: "Oscuro",
      action: () => {
        changeTheme("dark");
      },
    },
  ];

  return (
    <>
      <BaseModal isOpen={isOpen} onClose={onClose} title="Configuración">
        <div className="flex justify-between mt-4">
          <Label message={"Tema:"} />
          <Dropdown
            items={ThemesDropdownItems}
            label={theme == "dark" ? "Oscuro" : "Claro"}
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button type={"secondary"} message={"Cancelar"} click={onClose} />
          <Button type={"primary"} message={"Aceptar"} click={onClose} />
        </div>
      </BaseModal>
    </>
  );
}

export default ConfigModal;
