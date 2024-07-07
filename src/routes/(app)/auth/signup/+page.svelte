<script>
  import { enhance } from "$app/forms";

  export let form;
</script>

<h1 class="text-center text-2xl py-2">Signup Now</h1>

{#if form?.errorMessage}
  <!-- content here -->
  <h1 class="text-lg text-red-500">{form.errorMessage}</h1>
{/if}

<form
  use:enhance
  action="?/signupMethod"
  method="post"
  class="border border-yellow-700 p-5 flex flex-col space-y-5"
>
  <input
    class="ring-1 outline-none border-none focus:ring-1 ring-yellow-700 py-2 px-3 rounded"
    type="email"
    name="email"
    id="email"
    placeholder="example@gmail.com"
  />

  <input
    class="ring-1 outline-none border-none focus:ring-1 ring-yellow-700 py-2 px-3 rounded"
    type="password"
    name="password"
    id="password"
    placeholder="Create your password"
  />

  <button class="bg-yellow-700 text-white p-3 rounded" type="submit"
    >Signup Now</button
  >
</form>
