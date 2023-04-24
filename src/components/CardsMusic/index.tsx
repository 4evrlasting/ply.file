import { Box, Flex, Grid, SimpleGrid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

import { ListMusicProps, useMusicContext } from "store/contextMusic";

type CardsMusicProps = {
  dataMusic: ListMusicProps[];
};

export const CardsMusic = ({ dataMusic }: CardsMusicProps) => {
  const { setSelectedMusic, handleMusicActive, setIsMusicActive } =
    useMusicContext();

  return (
    <SimpleGrid
      mt="20px"
      columns={3}
      color="white"
      spacingX={8}
      spacingY={210}
    >
      {dataMusic.map((music) => (
        <GridItem ml="5px" key={music.musicUrl}>
          {/* <Box
            backgroundImage={music.imageAlbum}
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            borderRadius="6px"
            backgroundSize="cover"
            h="290px"
            w="150px"
            opacity="0.2"
          ></Box> */}
          <Box h="100px" mt="" w="" position="absolute">
            <Image
              w="100px"
              borderRadius="6px"
              objectFit="cover"
              h="100px"
              mt="10px"
              alt={music.nameMusic}
              src={music.imageAlbum}
            />

            <Flex alignItems="center" justifyContent="flex" w="full">
              <Icon
                boxSize="30px"
                position="absolute"
                top="90"
                right="0"
                borderRadius="100px"
                bg="white"
                color="gray"
                cursor="pointer"
                onClick={() => {
                  handleMusicActive(music.musicUrl);
                  setIsMusicActive(music.isActive ? !music.isActive : true);
                  setSelectedMusic(music);
                }}
                as={music.isActive ? AiFillPauseCircle : AiFillPlayCircle}
              />
            </Flex>

            <Box mt="10px">
              <Text fontSize="12px" fontWeight="bold" color="secondary.300">
                {music.album}
              </Text>
              <Text fontSize="14px" mt="3px" fontWeight="bold">
                {music.nameMusic}
              </Text>
              <Text mt="3px">{music.author}</Text>
            </Box>
          </Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
