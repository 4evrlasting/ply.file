import { Grid } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { fileGenere } from "services/Data/filesGenere";

export const GenresMusic = () => {
  const router = useRouter();
  return (
    <Grid
      templateColumns="repeat(auto-fill, 160px)"
      px={5}
      rowGap="10px"
      columnGap="10px"
      color="white"
    >
      {fileGenere.map((genere) => (
        <Image
          key={genere.id}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
            cursor: "pointer",
            outline: "1px",
          }}
          onClick={() => router.push(genere.route)}
          src={genere.src}
          alt={genere.alt}
        />
      ))}
    </Grid>
  );
};
