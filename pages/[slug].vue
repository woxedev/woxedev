<template>
   <article class="pt-10 prose md:pt-24 prose-neutral prose-pre:bg-neutral-200/40 *:underline-offset-[2.5px]">
      <NuxtLink href="/">&larr; Back to home</NuxtLink>
      <img :src="data.image" class="object-cover w-full mb-4 aspect-video rounded-2xl" alt="" />
      <h2 class="mx-auto" v-text="data.title"></h2>
      <p v-html="formatDescription(data.description)"></p>
      <hr class="my-10 border-neutral-200" />
      <ContentRenderer :content="data"><ContentRendererMarkdown :value="data" /></ContentRenderer>
   </article>
</template>

<script setup lang="ts">
let { params } = useRoute();
let { slug } = params as {
   slug: string;
};
if (typeof slug !== "string") {
   navigateTo("/404");
}
slug = "/" + slug;

const contentQuery = queryContent();
const data = await queryContent()
   .where({
      _path: { $eq: slug },
   })
   .findOne();

if (!data) {
   navigateTo("/404");
}
useHead({
   title: data.title + " • Yusuf Eren Demir",
   meta: [
      {
         name: "description",
         content: data.description,
      },
      {
         property: "og:title",
         content: data.title + " • Yusuf Eren Demir",
      },
      {
         property: "og:description",
         content: data.description,
      },
      {
         property: "og:image",
         content: data.image,
      },
      {
         property: "og:url",
         content: "https://woxe.dev" + slug,
      },

      {
         property: "twitter:url",
         content: "https://woxe.dev" + slug,
      },
      {
         property: "twitter:title",
         content: data.title + " • Yusuf Eren Demir",
      },
      {
         property: "twitter:description",
         content: data.description,
      },
      {
         property: "twitter:image",
         content: data.image,
      },
   ],
});
</script>
