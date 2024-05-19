<template>
   <div class="mb-10">
      <h3 class="mb-2 text-2xl font-medium">Projects</h3>
      <p class="max-w-lg text-neutral-600">I love working on projects and learning new things. Here are some of my open source projects.</p>

      <div>
         <Card v-for="project in projects" v-bind="project" class="mt-10" disable-line-clamp />
      </div>
   </div>
</template>

<script setup lang="ts">
const projects = [
   {
      title: "Website",
      description: "This is my personal website. I built this website using Vue.js, Tailwind CSS, and Vite. I also used Markdown for writing blog posts. You can check out the source code on [GitHub](https://github.com/woxedev/woxedev).",
      info: "Nuxt.js, Tailwind CSS",
   },
   {
      title: "CSS Room",
      description: "CSS Room is a 3D room built using only CSS. I built this project to learn more about CSS and 3D transformations. You can check out the source code on [GitHub](https://github.com/woxedev/css-room). You can also view the live demo on [Vercel](https://css-room.vercel.app/).",
      info: "CSS",
   },
   {
      title: "Triangle Generator",
      description:
         "Triangle Generator is a tool that generates CSS triangles. You can customize the size, color, and position of the triangle. You can check out the source code on [GitHub](https://github.com/woxedev/triangle-generator). You can also view the live demo on [Vercel](https://triangle-generator.vercel.app/).",
      info: "React, Bootstrap",
   },
   {
      title: "wDefense",
      description: "wDefense is a simple game built using Canvas api. The goal of the game is to defend the your tower from blobs. You can check out the source code on [GitHub](https://github.com/woxedev/wDefense). You can also view the live demo on [Vercel](https://wdefense.vercel.app/).",
      info: "Vue, Canvas",
   },
];
</script>
