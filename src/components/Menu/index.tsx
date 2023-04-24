import {
  Box,
  Flex,
  Icon,
  Tooltip,
  useMediaQuery,
  Menu as MenuChakra,
  MenuList,
  MenuButton,
  IconButton,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiMusic } from "react-icons/fi";
import { MdOutlineLibraryMusic, MdMusicNote, MdExplore, MdHomeFilled } from "react-icons/md";
import { RiPlayListFill, RiUser3Fill, RiUser3Line } from "react-icons/ri";
import { BiUser, BiLogOut } from "react-icons/bi";

import { EnumConstRouter } from "constants/enumConstRouter";
import { useMusicContext } from "store/contextMusic";

import { HomeIcon, LogoIconSmall } from "icons";

import { ContainerMenu } from "./ContainerMenu";
import { AiOutlinePoweroff } from "react-icons/ai";

export const Menu = () => {
  const router = useRouter();
  const [mobile] = useMediaQuery("(max-width: 900px)");

  const { handleSignOut, setIsExpandPlayer } = useMusicContext();

  return (
    <Box
      position="relative"
      w={mobile ? "full" : "70px"}
      h={mobile ? "50px" : "full"}
      mb={mobile ? "-1px" : ""}
    >
      <ContainerMenu
        width={mobile ? "full" : "70px"}
        pt={mobile ? "0px" : "20px"}
        pl={mobile ? "10px" : undefined}
      >
        {!mobile && (
          <Flex pb="15px" justifyContent="center" alignItems="center">
           <Image src="https://i.ibb.co/qRmt1Nf/Untitled-1.png" w="40px" h="40px"></Image>
          </Flex>
        )}

        <Tooltip placement="right" color="#ffff" hasArrow label="Home">
          <Flex
            _hover={{
              background: "#282828",
            }}
            mb={mobile ? undefined : "5px"}
            cursor="pointer"
            alignItems="center"
            pt={mobile ? "5px" : "10px"}
            pb={mobile ? "5px" : "10px"}
            pl="10px"
            onClick={() => {
              setIsExpandPlayer(false);
              router.push(EnumConstRouter.HOME);
            }}
            justifyContent="center"
          >
            <Icon mr="11px" cursor="pointer" w="30px" h="30px" color="white" as={MdHomeFilled} />
          </Flex>
        </Tooltip>
        <Tooltip
          hasArrow
          color="#ffff"
          placement="right"
          label="My Collection"
        >
          <Flex
            _hover={{
              background: "#282828",
            }}
            cursor="pointer"
            alignItems="center"
            mb={mobile ? undefined : "5px"}
            pt={mobile ? "5px" : "10px"}
            pb={mobile ? "5px" : "10px"}
            pl="10px"
            onClick={() => {
              setIsExpandPlayer(false);
              router.push(EnumConstRouter.COLLECTIONS);
            }}
            justifyContent="center"
          >
            <Icon
              mr="11px"
              cursor="pointer"
              w="30px"
              h="30px"
              color="white"
              as={MdMusicNote}
            />
          </Flex>
        </Tooltip>
        <Tooltip
          hasArrow
          color="#ffff"
          placement="right"
          label="Explore"
        >
          <Flex
            _hover={{
              background: "#282828",
            }}
            cursor="pointer"
            alignItems="center"
            mb={mobile ? undefined : "5px"}
            pt={mobile ? "5px" : "10px"}
            pb={mobile ? "5px" : "10px"}
            pl="10px"
            onClick={() => {
              setIsExpandPlayer(false);
              router.push(EnumConstRouter.ALL_COLLECTIONS);
            }}
            justifyContent="center"
          >
            <Icon
              mr="11px"
              cursor="pointer"
              w="30px"
              h="30px"
              color="white"
              as={MdExplore}
            />
          </Flex>
        </Tooltip>
        <Tooltip
          hasArrow
          color="#ffff"
          placement="right"
          label="Upload"
        >
          <Flex
            _hover={{
              background: "#282828",
            }}
            cursor="pointer"
            alignItems="center"
            mb={mobile ? undefined : "5px"}
            pt={mobile ? "5px" : "10px"}
            pb={mobile ? "5px" : "10px"}
            pl="10px"
            onClick={() => {
              setIsExpandPlayer(false);
              router.push(EnumConstRouter.CREATE_MUSIC);
            }}
            justifyContent="center"
          >
            <Icon
              mr="11px"
              cursor="pointer"
              w="30px"
              h="30px"
              color="white"
              as={RiPlayListFill}
            />
          </Flex>
        </Tooltip>
        {mobile && (
          <Tooltip
            hasArrow
            color="#ffff"
            placement="right"
            label="Upload"
          >
            <Flex
              _hover={{
                background: "#282828",
              }}
              cursor="pointer"
              alignItems="center"
              mb={mobile ? undefined : "5px"}
              pt={mobile ? "5px" : "10px"}
              pb={mobile ? "5px" : "10px"}
              pl="10px"
              justifyContent="center"
            >
              <MenuChakra>
                <MenuButton
                  _hover={{
                    background: "none",
                  }}
                  border="none"
                  _active={{
                    background: "none",
                  }}
                  as={IconButton}
                  aria-label="Options"
                  icon={
                    <Icon
                      mr="15px"
                      cursor="pointer"
                      w="30px"
                      h="25px"
                      color="white"
                      as={RiUser3Line}
                    />
                  }
                  variant="outline"
                />
                <MenuList bg="primary.700" border="none">
                  <MenuItem
                    color="white"
                    bg="primary.700"
                    _hover={{
                      background: "primary.600",
                    }}
                    borderColor="primary.600"
                    onClick={() => handleSignOut()}
                    fontSize="12px"
                  >
                    <Box ml="5px" mr="15px">
                      <BiLogOut />
                    </Box>{" "}
                    Logout
                  </MenuItem>
                </MenuList>
              </MenuChakra>
            </Flex>
          </Tooltip>
        )}
      </ContainerMenu>
    </Box>
  );
};
