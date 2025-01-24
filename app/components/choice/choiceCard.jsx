import Image from "next/image";
import Link from "next/link";

export default function ChoiceCard({
  src,
  category,
  title,
  subTitle,
  borderColor,
}) {
  return (
    <div
      className={`border-[2px] rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer ${borderColor}`}
    >
      <div className="mb-2">
        <div className="flex justify-between">
          <div className="relative w-[120px] h-[120px]">
            <Image
              src={src}
              alt={title}
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="text-2xl">{category}</div>
        </div>
      </div>
      <div className="text-lg font-bold">{title}</div>
      <div className={`border-t my-1 ${borderColor}`}></div>
      <div className="text-gray-500 text-xs line-clamp-2">{subTitle}</div>
    </div>
  );
}
