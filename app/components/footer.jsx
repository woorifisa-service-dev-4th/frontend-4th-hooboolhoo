import Icon from "./icon";

export default function Footer() {
  return (
    <footer className=" bg-[#FFCC00] w-full mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col mr-[50px] gap-4">
          <Icon src="/images/pattern_left.svg" alt="footer Icon" size={120} cursorPointer={false} />
          <Icon src="/images/pattern_left.svg" alt="footer Icon" size={120} cursorPointer={false} />
        </div>
        <Icon src="/images/fire.svg" alt="footer Icon" size={150} cursorPointer={false} />
        <div className="flex flex-col ml-[50px] gap-4">
          <Icon src="/images/pattern_right.svg" alt="footer Icon" size={120} cursorPointer={false} />
          <Icon src="/images/pattern_right.svg" alt="footer Icon" size={120} cursorPointer={false} />
        </div>
      </div>
    </footer>
  );
}
