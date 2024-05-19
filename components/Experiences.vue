<template>
   <div>
      <div class="mb-10">
         <h3 class="text-2xl font-medium mb-2">Experiences</h3>
         <p class="max-w-lg text-neutral-600">Here are some of the experiences I have gained over the years. I have worked on various projects and gained experience in different areas.</p>
      </div>

      <div class="flex flex-col gap-24 border-l-2 border-l-neutral-200 pl-10 py-10 relative ml-2">
         <div class="w-4 h-4 rounded-full border-neutral-200 bg-neutral-100 border-2 absolute -left-[calc(1rem/2+1px)] bottom-[calc(100%-1rem/2)]"></div>
         <div class="w-10 h-56 bg-gradient-to-t from-neutral-100 to-neutral-100/0 bottom-0 -left-5 absolute"></div>
         <ExperienceCard class="relative pl-2" v-bind="experience" v-for="experience in Experiences"></ExperienceCard>
      </div>
   </div>
</template>
<script setup lang="ts">
const Experiences = [
   {
      title: "Istanbul Nisantasi University Open Source Club",
      position: "Project Coordinator & Maintainer",
      date: {
         start: "5 May 2024",
      },
      description:
         "As a project coordinator and maintainer, I am responsible for managing the projects and maintaining the repositories of the club. I also organize events and workshops to help students learn about open source and contribute to projects. You can check out our projects on [GitHub](https://github.com/penguenler).",
   },
   {
      title: "Freelance Developer",
      position: "Full-stack Developer",
      date: {
         start: "July 2022",
      },
      description:
         "I work as a full-stack developer on various projects. I have experience with Vue.js, Tailwind CSS, and Node.js. I also have experience with PostgreSQL. I devloped various projects for clients, developed RESTful APIs, authentication systems, converted designs to responsive web pages, and more.",
   },
];
</script>
