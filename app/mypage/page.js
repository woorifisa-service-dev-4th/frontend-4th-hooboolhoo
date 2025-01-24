import Tiger from "../components/Tiger/Tiger";
import Profile from "../components/Profile";
import { VStack, HStack, Spacer } from "@chakra-ui/react";
import GridPage from "../components/mypage/GridPage";
import ScrollPage from "../components/mypage/ScrollPage";

export default function Page() {
  return (
    <VStack gap="10">
      <div className="min-h-[100]">
        <Profile />
      </div>
      <VStack align="baseline">
        <HStack>
          <div>나의 테스트 결과</div>
          <img src="/images/sub_logo.svg" alt="" className="w-10" />
        </HStack>
        <Tiger children={<GridPage url="http://localhost:3000/gameWhatIMade" />} />
      </VStack>

      <VStack align="baseline">
        <HStack>
          <div>내가 만든 테스트</div>
          <img src="/images/sub_logo.svg" alt="" className="w-10" />
        </HStack>
        <Tiger
          children={<ScrollPage url="http://localhost:3000/gameWhatIDid" />}
        />
      </VStack>

      <Spacer />
    </VStack>
  );
}
