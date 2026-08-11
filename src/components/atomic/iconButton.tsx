import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconButtonProps {
  iconName: string;
  click: () => void;
}

function IconButton({ iconName, click }: IconButtonProps) {
  return (
    <FontAwesomeIcon
      icon={["fas", iconName] as IconProp}
      className="text-icon hover:text-icon-hovered transition-colors cursor-pointer"
      size="lg"
      onClick={click}
    />
  );
}

export default IconButton;
