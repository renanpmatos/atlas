import GlassCard from "./(exemples)/glassCard";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <Input animatedPlaceholder="teste" className="text-slate-950" />
      </div>
    </div>
  );
}
