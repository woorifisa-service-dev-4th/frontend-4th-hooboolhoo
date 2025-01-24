import Image from "next/image";

const Icon = ({ src, alt, size, onClick, cursorPointer = true }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cursorPointer ? "cursor-pointer" : ""}
      onClick={onClick}
    />
  );
};

export default Icon;
