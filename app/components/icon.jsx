import Image from "next/image";

const Icon = ({ src, alt, size = 40, onClick }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default Icon;
