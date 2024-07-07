<script lang="ts">
  import { enhance } from "$app/forms";
  import type { Session, User } from "@supabase/supabase-js";

  export let user: User | null | undefined;
</script>

<nav class="bg-yellow-700 text-white">
  <div class="container flex items-center space-x-3 h-16">
    <a href="/" class="text-lg">Sanatan Haritage</a>
    <a href="/">Home</a>
    <a href="/about">About</a>

    {#if user}
      <!-- content here -->
      <a href="/chapters">Chapters</a>
      <form use:enhance action="/auth/logout?/logoutMethod" method="post">
        <button type="submit">Logout</button>
      </form>
    {:else}
      <!-- else content here -->
      <a href="/auth/login">Login</a>
      <a href="/auth/signup">Signup</a>
    {/if}
  </div>
</nav>
