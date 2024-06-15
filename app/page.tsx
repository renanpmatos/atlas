import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <Input className="text-slate-950" />
        <Input
          animatedLabel="Email"
          variant="flat"
          className="text-slate-950"
        />
        <Input
          animatedLabel="Email"
          variant="border"
          className="text-slate-950"
        />
        <Input
          animatedLabel="Email"
          variant="underline"
          className="text-slate-950"
        />
        <Input
          animatedLabel="Email"
          variant="faded"
          className="text-slate-950"
        />
      </div>
    </div>
  );
}
