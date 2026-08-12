function Header({ text }: { text: string }) {
  return (
    <>
      <h1 className="text-header-text text-8xl selection:text-header-text">
        {text}
      </h1>
    </>
  );
}

export default Header;
