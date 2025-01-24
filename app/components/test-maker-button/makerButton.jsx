import Image from "next/image";

export default function MakerButton() {
  return (
    <div className="bg-[#FFCC00] rounded-lg flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
      <div className="mb-2 group-hover:animate-vibrate">
        <Image
          src="/images/sub_logo.svg"
          alt="Sub Logo"
          width={80}
          height={80}
        />
      </div>
      <div className="mt-2 text-center text-md font-bold">
        호불호 게임
        <div>만들기</div>
      </div>
    </div>
  );
}
