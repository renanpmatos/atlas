"use client";

import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import React, { useState } from "react";

export default function Badges() {
  const [showBadge, setShowBadge] = useState(true);

  const handleCloseBadge = () => {
    setShowBadge(false);
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-row gap-20">
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
      <div className="flex flex-row gap-20">
        <Badge disabled={true} content={"teste"} className="" />
        <Badge content={"teste"} variant={"default"} className="" />
        <Badge content={"teste"} variant={"outline"} className="" />
        <Badge content={"teste"} variant={"shadow"} className="" />
      </div>
      <div className="flex flex-row gap-32">
        {showBadge && (
          <Badge
            content="Close"
            closeVariant="round"
            variant="outline"
            onClose={handleCloseBadge}
          />
        )}
        {showBadge && (
          <Badge
            content="Close"
            closeVariant="round"
            variant="default"
            onClose={handleCloseBadge}
          />
        )}
      </div>
    </div>
  );
}
