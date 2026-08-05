function Label({ message }: { message: string }) {
  return (
    <>
      <p className="py-2 px-4 items-center justify-center place-items-center">
        {message}
      </p>
    </>
  );
}

export default Label;
