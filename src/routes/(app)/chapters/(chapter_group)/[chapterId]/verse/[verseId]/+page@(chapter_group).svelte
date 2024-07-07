<script lang="ts">
  export let data;

  let defaultAuthorName: string = "Swami Gambirananda";
</script>

<div class="h-full overflow-y-scroll">
  <div class="">
    {#await data.verseDetailsPromise}
      <!-- promise is pending -->
      <p>Verse details is loading</p>
    {:then verseDetails}
      <div class="h-20 flex overflow-x-scroll space-x-1 space-y-1">
        {#each verseDetails.translations as author}
          <button
            type="button"
            on:click={() => {
              defaultAuthorName = author.author_name;
            }}
            class={`border w-40 border-yellow-700  rounded p-2 ${author.author_name === defaultAuthorName ? "bg-yellow-700 text-white" : "text-yellow-700"}`}
          >
            <p>
              {author.author_name}
            </p>
          </button>
        {/each}
      </div>
      <!-- content of the verse -->
      <div class="py-3">
        <h3 class="text-center font-extrabold py-1 text-2xl">
          Chapter {verseDetails.chapter_number}
        </h3>

        <h1 class="text-center font-semibold text-lg py-1 italic">
          {verseDetails.text}
        </h1>

        <h4 class="text-sm text-center py-1">{verseDetails.word_meanings}</h4>

        <p class="text-base text-justify py-1">
          <span class="font-semibold">Translation:</span>
          {verseDetails.translations.find(
            (translator) => translator.author_name === defaultAuthorName
          )?.description}
        </p>

        <div class="py-3">
          <h3 class="font-semibold py-1">Perport:</h3>
          <p class="py-1 text-base text-justify">
            {#if verseDetails.commentaries.find((translator) => translator.author_name === defaultAuthorName)?.description !== undefined}
              <!-- content here -->
              {verseDetails.commentaries.find(
                (translator) => translator.author_name === defaultAuthorName
              )?.description}
            {:else}
              <!-- else content here -->

              Ops! Sorry, {defaultAuthorName}, never commented on this verse
            {/if}
          </p>
        </div>
      </div>
    {/await}
  </div>
</div>
