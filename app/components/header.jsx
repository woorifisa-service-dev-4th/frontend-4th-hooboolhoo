import Icon from "./icon";

export default function Header() {
  return (
    <header className="text-white p-4 shadow">
      <div className="flex items-center justify-between">
        <Icon src="/images/search.svg" alt="Search Icon" size={33} className="mr-4" />
        <Icon src="/images/main_logo.svg" alt="Main Logo" size={126} />
        <Icon src="/images/profile.svg" alt="Profile Icon" size={38} className="ml-4" />
      </div>
    </header>
  );
}
