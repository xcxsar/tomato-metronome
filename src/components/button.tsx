const buttonType: Record<string, string> = {
  primary:
    "bg-rose-600 dark:bg-rose-900 hover:bg-rose-700 dark:hover:bg-rose-800 text-white",
  secondary:
    "bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-white ",
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
          " rounded-md px-4 py-2 text-sm font-medium shadow transition-colors"
        }
        onClick={click}
      >
        {message}
      </button>
    </>
  );
}

export default Button;
