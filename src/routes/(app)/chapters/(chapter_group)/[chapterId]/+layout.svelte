<script lang="ts">
  export let data;
</script>

<div class="w-full py-6 px-3 h-full overflow-y-scroll">
  <slot />

  <div class="py-5 px-3">
    <div class="flex">
      <ul>
        {#await data.versesList}
          <!-- promise is pending -->
          <p>Loading all verses</p>
        {:then versesList}
          <!-- promise was fulfilled -->
          <div class="flex flex-col space-y-3">
            {#each versesList as verse, i (i)}
              <div class="py-2 px-2 border border-yellow-700 rounded">
                <!-- content here -->
                <p
                  class=" h-14 w-14 bg-yellow-700 rounded-full flex items-center justify-center text-white"
                >
                  {verse.verse_number}
                </p>
                <h4 class="py-2 text-base text-yellow-700 italic">
                  {verse.text}
                </h4>

                <h3 class="py-2 text-sm">
                  <span class="font-semibold">
                    <i>Pronounciation: </i>
                  </span>
                  {verse.word_meanings}
                </h3>

                <p class="py-3">
                  Translation: {verse.translations.find(
                    (translationDetails) =>
                      translationDetails.author_name === "Swami Gambirananda"
                  )?.description}
                </p>
                <div class="py-3">
                  <a
                    href={`/chapters/${verse.chapter_number}/verse/${verse.verse_number}/`}
                    class="py-2 px-3 text-center bg-yellow-700 hover:bg-black text-white rounded"
                    >View Purport</a
                  >
                </div>
                <i class="text-sm py-2">
                  Shankar Vashya, Transalted by - {verse.translations.find(
                    (translationDetails) =>
                      translationDetails.author_name === "Swami Gambirananda"
                  )?.author_name}
                </i>
              </div>
            {/each}
          </div>
        {/await}
      </ul>
    </div>
  </div>
</div>
