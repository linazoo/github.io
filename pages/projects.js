import { VStack } from "@chakra-ui/react";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
  return (
    <VStack spacing={10} mt={10} justify="flex-start" direction="column">
      <ProjectCard
        image="/change-my-view.png"
        name="Change My View sexy clone"
        link="https://github.com/linazoo/change-my-view"
      />
      <ProjectCard
        image="/hacker-news.png"
        name="Hacker News Clone"
        link="https://github.com/linazoo/my-hacker-news"
      />
      <ProjectCard
        image="/git-hub-battle.png"
        name="GitHub Battle"
        link="https://github.com/linazoo/Github-Battle"
      />
    </VStack>
  );
}
