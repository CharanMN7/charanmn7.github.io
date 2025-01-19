import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const projectsData = [
  {
    title: "devsForFun",
    img_url: "/devsforfun.jpg",
    description:
      "A website that drove a traffic of 370+ people for a 3-week coding challenge.",
    tech: ["React", "Google Forms", "CSS"],
  },
  {
    title: "Inventory Management System",
    img_url: "/comingsoon.jpg",
    description:
      "A powerful inventory management system for all of your inventory needs with all of your favorite plugins ready to setup.",
    tech: ["Next.JS", "Prisma", "MongoDB"],
  },
  {
    title: "Events Platform",
    img_url: "/comingsoon.jpg",
    description:
      "A simple and easy-to-use events platform with a built-in content management system and live quiz app.",
    tech: ["Next.JS", "Prisma", "Supabase"],
  },
];

const ProjectsCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-8 sm:px-12"
    >
      <CarouselContent>
        {projectsData.map((project) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={project.title}
          >
            <div className="p-1">
              <ProjectCard {...project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-8 sm:ml-12" />
      <CarouselNext className="mr-8 sm:mr-12" />
    </Carousel>
  );
};
export default ProjectsCarousel;

const ProjectCard = ({
  title,
  img_url,
  description,
  tech,
}: {
  title: string;
  img_url: string;
  description: string;
  tech: string[];
}) => {
  return (
    <Card>
      <CardContent className="text-left p-4">
        <img src={img_url} alt="" className="w-full" />
        <h3 className="text-xl font-semibold my-4">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <div className="flex gap-2 mt-4 overflow-scroll">
          {tech.map((t) => (
            <Badge className="text-nowrap" key={t}>
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
