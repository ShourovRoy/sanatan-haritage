<script lang="ts">
  import DefaultNavbar from "$lib/components/DefaultNavbar.svelte";

  export let data;
</script>

<DefaultNavbar user={data.user} />

<slot />
