import { Box, Flex } from "@chakra-ui/react";

import { GenresMusic }  from "components/GenresMusic";
import { Header } from "components/Header";

export default function Home() {
  return (
    <Box
      overflow="auto"
      w="full"
      position="relative"
      pr=""
      sx={{
        "&::-webkit-scrollbar": {
          height: "0",
          width: "0",
        },
        "& .virtualized_List::-webkit-scrollbar": {
          height: "0",
          width: "0",
        },
      }}
    >
      <Box w="full" mt="20px">
        <Header isCollection={false} />
      </Box>
      <Box w="full" pt="20px">
        <GenresMusic />
      </Box>
    </Box>
  );
}
