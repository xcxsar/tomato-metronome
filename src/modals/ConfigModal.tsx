import Label from "../components/label";
import Button from "../components/button";
import Dropdown, { type DropdownItem } from "../components/dropdown";
import BaseModal from "./BaseModal";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemesDropdownItems: DropdownItem[] = [
  {
    name: "Claro",
    action: () => {
      document.documentElement.classList.remove("dark");
    },
  },
  {
    name: "Oscuro",
    action: () => {
      document.documentElement.classList.add("dark");
    },
  },
];

function ConfigModal({ isOpen, onClose }: ConfigModalProps) {
  return (
    <>
      <BaseModal isOpen={isOpen} onClose={onClose} title="Configuración">
        <div className="flex justify-between mt-4">
          <Label message={"Tema:"} />
          <Dropdown items={ThemesDropdownItems} label={"Selecctionar"} />
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
