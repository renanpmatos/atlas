import StarRate from "@/components/ui/starRate";

export default function StarRateExemples() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-100">
      <StarRate data={0} starColor="#facc15" />
      <StarRate data={3.5} starColor="#facc15" />
      <StarRate data={3.5} starColor="#facc15" defaultColor="#94a3b8" />
      <StarRate data={3.5} starColor="#facc15" stroke="#64748b" />
      <StarRate
        data={3.5}
        starColor="#facc15"
        stroke="#64748b"
        defaultColor="#94a3b8"
      />
    </div>
  );
}
