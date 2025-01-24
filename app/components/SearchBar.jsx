import { useState } from "react";
import { Input, Box } from "@chakra-ui/react";
import Icon from "../components/icon";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // 검색창 토글 핸들러
  const handleToggleSearch = () => setIsOpen((prev) => !prev);

  // 입력값 변경 핸들러
  const handleChange = (event) => setQuery(event.target.value);

  // Enter 키 입력 시 검색 실행
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      console.log("검색어:", query);
      // 검색 로직 추가 가능
    }
  };

  return (
    <Box display="flex" alignItems="center" position="relative">
      {/* 아이콘 클릭 시 검색바 토글 */}
      <Icon
        src="/images/search.svg"
        alt="Search Icon"
        size={33}
        className="cursor-pointer mr-4"
        onClick={handleToggleSearch}
      />

      {/* 검색바 */}
      {isOpen && (
        <Input
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력하세요..."
          size="sm"
          width="200px"
          position="absolute"
          left="50px" // 아이콘 옆에 위치
          zIndex="1"
        />
      )}
    </Box>
  );
};

export default SearchBar;
