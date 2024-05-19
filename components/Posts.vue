<template>
   <div>
      <div class="mb-10">
         <h3 class="mb-2 text-2xl font-medium">Blog</h3>
         <p class="max-w-lg text-neutral-600">I write about my experiences, projects and things I learn. You can find my blog posts here.</p>
      </div>
      <div class="grid gap-10 sm:grid-cols-2">
         <div v-for="post in posts">
            <a :href="post._path">
               <Card
                  v-bind="{
                     title: post.title!,
                     description: post.description,
                     image: post.image,
                     date: post.date,
                  }"
               />
            </a>
         </div>
         <div v-if="posts.length === 0" class="col-span-2">
            <p class="text-sm text-neutral-600">I didn't write any posts yet. You can follow up my socials to get notified about new posts.</p>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
const contentQuery = queryContent();
let posts = await contentQuery.find();
</script>
