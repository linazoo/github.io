import { VStack } from "@chakra-ui/react";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
  return (
    <VStack spacing={10} mt={10} justify="flex-start" direction="column">
      <ProjectCard
        image="/hacker-news.png"
        name="Hacker News Clone"
        link="https://github.com/linazoo/my-hacker-news"
      />
      <ProjectCard
        image="/hacker-news.png"
        name="Tracker"
        link="https://github.com/linazoo/my-hacker-news"
      />
    </VStack>
  );
}
