"use client";

import { useState } from "react";
import Icon from "@/app/components/icon"; // Icon 컴포넌트 import
import { Input } from "@chakra-ui/react"; // Chakra UI의 Input 컴포넌트 사용
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();

  const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색 바 토글 상태
  const [searchQuery, setSearchQuery] = useState(""); // 검색 입력 값

  // 검색 바 토글 핸들러
  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // 검색 입력 값 변경 핸들러
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Enter 키를 누르면 검색 실행
  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", searchQuery);
      // 검색 로직 추가 가능
    }
  };

  

  return (
    <header className="text-white p-4 shadow">
      <div className="flex items-center justify-between">
        
        <Icon
          src="/images/search.svg"
          alt="Search Icon"
          size={33}
          className="mr-4"
          onClick={toggleSearchBar} // 클릭 시 검색 바 토글
        />
      
        <Icon src="/images/main_logo.svg" alt="Main Logo" size={126} onClick = { () => router.push('/') } />
        
        <Icon src="/images/profile.svg" alt="Profile Icon" size={38} className="ml-4" onClick = {()=> router.push('/mypage') }/>
      </div>

      {isSearchOpen && (
        <div className="mt-4 flex justify-center">
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown} // Enter 키 검색
            placeholder="Search..."
            width="300px"
          />
        </div>
      )}
    </header>
  );
}
