<script lang="ts">
  export let data;
  let selectedChapterNumber: number;
</script>

<div class="py-5">
  <div class="container">
    <div class="grid grid-cols-12 rounded">
      <!-- Left side -->
      <div class="col-span-4 h-[700px] bg-yellow-700 px-10 py-3">
        <div class="flex flex-col space-y-3 h-full overflow-y-scroll">
          {#await data.gitaChapters}
            <!-- promise is pending -->
            <div class="py-4 px-3">
              <p>Loading the Chapters..</p>
            </div>
          {:then chapterList}
            <!-- promise was fulfilled -->
            {#each chapterList as item, i (i)}
              <a
                on:click={() => {
                  selectedChapterNumber = item.chapter_number;
                }}
                class={`p-3 rounded hover:bg-black hover:text-white ${item.chapter_number === selectedChapterNumber ? "bg-black text-white" : "bg-white"}`}
                href={`/chapters/${item.chapter_number}`}
                >{item.name_translated}</a
              >
            {/each}
          {/await}
        </div>
      </div>
      <div class="col-span-8 h-[700px] bg-slate-200 px-10">
        <slot />
      </div>
    </div>
  </div>
</div>
