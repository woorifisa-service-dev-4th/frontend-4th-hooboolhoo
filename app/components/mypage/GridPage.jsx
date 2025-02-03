import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { getMyPageData } from "../../lib/data";
import VsButton from "../ui/VsButton";

async function GridPage({url}) {
    const games = await getMyPageData(url)

  return (
    <Grid
    px = {5}
    rowGap={5}
    templateColumns="repeat(3, 1fr)"
    >
      {
        // games.map((game) =>
        //     <GridItem key = {game.gameId}>
        //         <VsButton
        //         key = {game.gameId}
        //         choice = {game.choice} 
        //         text = {game.result} 
        //         size = {{fontSize : 12, px : 5, py : 5}}
        //         />
        //     </GridItem>
        // )
      }
    </Grid>
  );
}

export default GridPage;
