// app/components/Header.jsx

"use client";

import { useState } from "react";
import Icon from "@/app/components/icon";
import { Input } from "@chakra-ui/react";
import Link from "next/link"; // Link 컴포넌트 추가

export default function Header() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색 바 토글 상태
  const [searchQuery, setSearchQuery] = useState(""); // 검색 입력 값

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", searchQuery);
    }
  };

  

  return (
    <header className="text-white p-4 shadow">
      <div className="flex items-center justify-between">
        {/* 검색 아이콘 */}
        <Icon
          src="/images/search.svg"
          alt="Search Icon"
          size={33}
          className="mr-4"
          onClick={toggleSearchBar}
        />

        {/* 메인 로고 */}
        <Link href="/">
          <Icon src="/images/main_logo.svg" alt="Main Logo" size={126} />
        </Link>

        {/* 프로필 아이콘 */}
        <Link href="/mypage">
          <Icon
            src="/images/profile.svg"
            alt="Profile Icon"
            size={38}
            className="ml-4 cursor-pointer"
          />
        </Link>
      </div>

      {isSearchOpen && (
        <div className="mt-4 flex justify-center">
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            placeholder="호불호~"
            width="300px"
            color="black"
          />
        </div>
      )}
    </header>
  );
}
