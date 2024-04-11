import Badges from "./(exemples)/badges";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <Badges />
      </div>
    </div>
  );
}
