import React from "react";
import { getMyPageData } from "@/app/lib/data";
import { HStack, VStack } from "@chakra-ui/react";

async function ScrollPage({ url }) {
  const games = await getMyPageData(url);

  return (
    <VStack>
      <HStack px={5}>
        {/* {games.map((game) => (
          <div key={game.gameId}></div>
        ))} */}
      </HStack>
    </VStack>
  );
}

export default ScrollPage;
