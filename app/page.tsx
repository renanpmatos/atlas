import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-20">
          <Badge content={"teste"} className="right-10" />
          <Badge content={"5"} placement="tright">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Badge>
          <Badge content={"5"} placement="tleft">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Badge>
          <Badge content={"5"} placement="bright">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Badge>
          <Badge content={"5"} placement="bleft">
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Badge>
          <div className="relative">
            <div className="absolute border-2 border-current bg-red-500 text-white font-semibold w-8 h-8 flex items-center justify-center rounded-full text-xs -translate-x-1/2 -translate-y-1/2 top-1 -right-6">
              99
            </div>
            <img
              src={"https://i.pravatar.cc/300?u=a042581f4e29026709d"}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5"></div>
        <div className="flex flex-row gap-5"></div>
      </div>
    </div>
  );
}
