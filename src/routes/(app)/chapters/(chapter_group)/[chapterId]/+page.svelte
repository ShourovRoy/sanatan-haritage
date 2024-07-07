<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

</script>

<div class="p-4">
  {#await data.chapterDetails}
    <!-- promise is pending -->
  {:then chapterDetails}
    <!-- promise was fulfilled -->
    <h4 class="text-center text-4xl font-extrabold">
      {chapterDetails.chapter_number}
    </h4>
    <h1 class="text-center text-2xl font-bold">
      Chapter Name: {chapterDetails.name_translated}
    </h1>
  
    <div class="py-2">
      <p class="text-justify">{chapterDetails.chapter_summary}</p>
    </div>
  {/await}
</div>
