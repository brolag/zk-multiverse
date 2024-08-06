export const Letter = ({ letter }: { letter: string }) => {
  const backgroundImage = `url(/images/letters/${letter}.png)`;

  return <div className="bg-local bg-cover	w-8 h-8" style={{ backgroundImage }}></div>;
};
