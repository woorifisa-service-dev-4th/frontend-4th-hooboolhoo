"use client";

import { useState } from "react";
import { HStack, Stack, Text, Input, Button, Box } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar"; // 아바타 컴포넌트

const Profile = () => {
  const initialUser = {
    id: "1",
    name: "호불호",
    email: "korean234@naver.com",
    avatar: "/images/profile_tiger.png", // 기본 아바타
  };

  const [isEditing, setIsEditing] = useState(false); // 편집 모드 여부
  const [user, setUser] = useState(initialUser); // 실제 저장된 값 상태
  const [tempUser, setTempUser] = useState(initialUser); // 임시 수정 상태
  const [avatarFile, setAvatarFile] = useState(null); // 선택된 파일 상태

  // 입력값 변경 핸들러
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTempUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // 파일 업로드 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarFile(reader.result); // 파일을 Base64로 변환하여 상태에 저장
        setTempUser((prevUser) => ({
          ...prevUser,
          avatar: reader.result, // 임시 수정 상태에 반영
        }));
      };
      reader.readAsDataURL(file); // 파일을 Base64로 변환하여 읽기
    }
  };

  // 편집 상태 변경 (수정 모드 전환)
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing) {
      setTempUser(user); // 편집 모드로 전환 시, 마지막 저장된 값으로 tempUser 설정
      setAvatarFile(user.avatar); // 마지막 저장된 아바타로 업데이트
    }
  };

  // 수정된 정보를 저장
  const handleSave = () => {
    const updatedUser = { ...tempUser }; // 임시 수정 상태를 user에 반영
    setUser(updatedUser); // user 상태 업데이트
    setAvatarFile(updatedUser.avatar); // avatar 상태 업데이트
    setIsEditing(false); // 편집 모드 종료
  };

  // 취소 버튼 클릭 시 마지막으로 저장된 값으로 되돌리기
  const handleCancel = () => {
    setTempUser(user); // 마지막 저장된 값으로 tempUser 업데이트
    setAvatarFile(user.avatar); // 마지막 저장된 아바타로 업데이트
    setIsEditing(false); // 편집 모드 종료
  };

  return (
    <Box maxW="600px" margin="auto" padding="4">
      <Stack gap="8">
        <HStack gap="4">
          <Avatar
            name={user.name}
            size="lg"
            src={avatarFile || user.avatar} // 선택된 파일이 있으면 그것을, 아니면 기존 아바타를 사용
          />
          <Stack gap="0">
            <HStack spacing="4" align="center">
              {/* Name과 편집, 저장 버튼을 나란히 배치 */}
              {isEditing ? (
                <Input
                  name="name"
                  value={tempUser.name} // 임시 수정 상태 사용
                  onChange={handleChange}
                  placeholder="Name"
                  size="sm"
                  marginBottom="2"
                  color="black"
                />
              ) : (
                <Text color="gray.500" fontWeight="medium">{user.name}</Text>
              )}
              <HStack spacing="2">
                <Button
                  colorScheme="blue"
                  onClick={isEditing ? handleCancel : toggleEditMode} // 편집 모드일 때는 취소, 아니면 편집
                  size="sm"
                  width="80px"
                >
                  {isEditing ? "취소" : "편집"}
                </Button>
                {isEditing && (
                  <Button
                    colorScheme="green"
                    onClick={handleSave}
                    size="sm"
                    width="80px"
                  >
                    저장
                  </Button>
                )}
              </HStack>
            </HStack>
            {isEditing ? (
              <Input
                name="email"
                value={tempUser.email} // 임시 수정 상태 사용
                onChange={handleChange}
                placeholder="Email"
                size="sm"
                marginBottom="2"
                color="black"
              />
            ) : (
              <Text color="gray.500" fontSize="sm">{user.email}</Text>
            )}
            {isEditing && (
              <Box>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  marginBottom="2"
                  size="sm"
                />
              </Box>
            )}
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Profile;
