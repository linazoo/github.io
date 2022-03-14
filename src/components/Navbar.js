import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex
      bg="white"
      color="black"
      w="full"
      sx={{ gap: "12px" }}
      align="center"
      pl={3}
      py={4}
    >
      <Link href="/">About</Link>
      <Link href="/projects">Work</Link>
      <Link href="/posts">Blog</Link>
    </Flex>
  );
}
