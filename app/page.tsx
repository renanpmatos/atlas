import Badges from "./(exemples)/badges";
import Buttons from "./(exemples)/buttons";
import GlassCard from "./(exemples)/glassCard";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <GlassCard />
      </div>
    </div>
  );
}
