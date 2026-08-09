function Label({ message }: { message: string }) {
  return (
    <>
      <p className="py-2 items-center justify-center place-items-center text-app-text">
        {message}
      </p>
    </>
  );
}

export default Label;
