const buttonType: Record<string, string> = {
  primary:
    "bg-button-primary hover:bg-button-primary-hovered text-button-primary-text",
  secondary:
    "bg-button-secondary hover:bg-button-secondary-hovered text-button-secondary-text ",
};

interface ButtonProps {
  type: string;
  message: string;
  click: () => void;
}

function Button({ type, message, click }: ButtonProps) {
  return (
    <>
      <button
        className={
          buttonType[type] +
          " rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus:outline-none focus:ring-2 focus:ring-focus"
        }
        onClick={click}
      >
        {message}
      </button>
    </>
  );
}

export default Button;
