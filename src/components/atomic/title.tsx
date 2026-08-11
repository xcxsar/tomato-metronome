function Title({ text }: { text: string }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-title-text selection:bg-selection-bg ">
        {text}
      </h3>
    </>
  );
}

export default Title;
