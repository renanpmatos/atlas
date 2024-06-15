import { Star, StarHalf } from "lucide-react";

interface IRateProps {
  data?: number;
  stroke?: string;
  starColor: string;
  defaultColor?: string;
}

const defaultStroke = "#94a3b8";

export default function StarRate({
  data = 0,
  stroke = defaultStroke,
  defaultColor = "transparent",
  starColor,
}: IRateProps) {
  const limitedRating = Math.min(data, 5);
  const integerRating = Math.floor(limitedRating);
  const decimalRating = limitedRating - integerRating;

  const fullStars = integerRating;
  const halfStar = decimalRating >= 0.1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const getStarElement = (fill: string, stroke: string) => (
    <Star fill={fill} stroke={stroke} />
  );

  const fullStarsElements = Array.from({ length: fullStars }, (_, index) =>
    getStarElement(starColor, stroke !== defaultStroke ? stroke : starColor)
  );

  const halfStarElement = halfStar ? (
    <div className="flex relative">
      {getStarElement(
        defaultColor,
        stroke !== defaultStroke ? stroke : defaultStroke
      )}
      <StarHalf
        className="absolute"
        fill={starColor}
        stroke={stroke !== defaultStroke ? stroke : starColor}
      />
    </div>
  ) : null;

  const emptyStarsElements = Array.from({ length: emptyStars }, (_, index) =>
    getStarElement(
      defaultColor,
      stroke !== defaultStroke ? stroke : defaultStroke
    )
  );

  return (
    <>
      <div className="h-screen flex justify-center gap-1 items-center">
        {fullStarsElements}
        {halfStarElement}
        {emptyStarsElements}
      </div>
    </>
  );
}
