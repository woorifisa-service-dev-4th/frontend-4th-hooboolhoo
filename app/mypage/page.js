import Tiger from "../components/Tiger/Tiger";
import { VStack, HStack, Spacer } from "@chakra-ui/react";

export default function Page() {
    return (
        <VStack >
            <VStack  align = 'baseline' mb = {20}>
                <HStack>
                <div>나의 테스트 결과</div>
                <img src="/images/sub_logo.svg" alt="" className = "w-10"/>
                </HStack>
            <Tiger/>
            </VStack>

            <VStack align = 'baseline' mb={20}>
            <HStack>
                <div>내가 만든 테스트</div>
                <img src="/images/sub_logo.svg" alt=""className = "w-10"/>
            </HStack>
            <Tiger/>
            </VStack>

            <Spacer/>
        </VStack>
    );
}