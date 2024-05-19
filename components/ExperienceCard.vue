<template>
   <div class="relative">
      <div class="absolute w-8 h-10 -left-[calc(2.5rem+2px)] -top-6 border-l-2 border-b-2 border-neutral-200 rounded-bl-3xl"></div>
      <div class="pl-0">
         <div class="flex flex-col justify-between gap-2 sm:items-center sm:flex-row">
            <span v-if="position" class="absolute text-xs font-normal text-neutral-600 bottom-full">{{ position }}</span>
            <p class="text-xl font-semibold">
               {{ title }}
            </p>
            <p class="text-sm text-neutral-600">
               {{ date.start }}
               {{ date.end ? ` - ${date.end}` : " - Present" }}
            </p>
         </div>
         <p v-html="formatDescription(description)" class="mt-2 text-neutral-600 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-neutral-400"></p>
      </div>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   title: string;
   position?: string;
   date: {
      start: string;
      end?: string;
   };
   /**
    * Description of the experience. Supports formatted text.
    * \*\*Bold\*\* text, \*italic\* text, and \[links\]\(https://example.com\) are supported.
    */
   description: string;
}>();
</script>
