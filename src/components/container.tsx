function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-dvh w-full bg-app-bg text-app-text flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}

export default Container;
