function Label({ message }: { message: string }) {
  return (
    <>
      <p className="py-2 items-center justify-center place-items-center text-app-text selection:bg-selection-bg">
        {message}
      </p>
    </>
  );
}

export default Label;
