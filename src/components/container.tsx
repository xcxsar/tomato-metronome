function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-dvh w-full bg-zinc-50 text-black dark:bg-zinc-900 dark:text-white flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}

export default Container;
