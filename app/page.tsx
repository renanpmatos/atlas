import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-20">
          <Badge content={"teste"} className="right-10" />
          <Badge
            content={"5"}
            variant={"circle"}
            placement="tright"
            className="bg-rose-500">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-full border-double border-8 border-gray-600"
            />
          </Badge>
          <Badge content={"5"} placement="tleft">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-2xl"
            />
          </Badge>
          <Badge
            placement="bright"
            icon={<Check />}
            className="rounded-full px-1 py-1.5 bg-green-500">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-2xl border-double border-8 border-green-500"
            />
          </Badge>
          <Badge content={"5"} placement="bleft">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-2xl"
            />
          </Badge>
        </div>
        <div className="flex flex-row gap-5"></div>
        <div className="flex flex-row gap-5"></div>
      </div>
    </div>
  );
}
