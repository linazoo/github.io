import {
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Avatar,
} from "@chakra-ui/react";

import { FaGithub, FaEnvelope, FaFile } from "react-icons/fa";

export default function Home() {
  return (
    <VStack align="center" gap="20px" justify="center">
      <Avatar src="/hi.svg" size="3xl" />
      <VStack>
        <Heading as="h2">I'm Lina Zuluaga</Heading>
        <Heading size="md" as="h3">
          Creative, Analytical Adaptable Front End Developer
        </Heading>
      </VStack>
      <Text textAlign="center">
        A Colombian bootcamp graduate, FKA UX designer located in Austin, TX.
      </Text>
      <Text textAlign="center">
        I care about the accessibility (a11y) and integrity of the products code
        as much as I care about the quality of how it looks, feels and works. I
        like crafting user-centered solutions through code by closely
        collaborating with designers throughout the full lifecycle of the
        project. Get in touch! 👇🏼
      </Text>
      <HStack spacing="20px" justifySelf="center">
        <Link href="mailto:lina.lyden@gmail.com">
          <Icon color="black" as={FaEnvelope} />
        </Link>
        <Link href="https://github.com/linazoo" target="_blank">
          <Icon color="black" as={FaGithub} />
        </Link>
        <Link
          href="https://docs.google.com/document/d/e/2PACX-1vSOEFM8iA5hj6HZabA4ViHXsBaAduC9ZaXozq1RMhfo2KMn47CG0pLILQxfqmHDzsEk2MloKMdRJA-A/pub"
          target="_blank"
        >
          <Icon color="black" as={FaFile} />
        </Link>
      </HStack>
    </VStack>
  );
}
