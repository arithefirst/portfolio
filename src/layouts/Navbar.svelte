<script lang="ts">
  let open: boolean = false;
</script>

<div
  class="fixed md:mx-auto md:inset-x-0 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-b-2xl top-0 md:top-2 md:rounded-2xl md:w-11/12 navbar bg-base-200 z-[1000]"
>
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-white text-xl">arithefirst</a>
  </div>
  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal text-white px-1">
      <li><a href="/#hero">Home</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/#projects">Projects</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <details bind:open class="dropdown dropdown-end">
      <summary class="btn btn-square btn-sm bg-base-300 w-10 h-10 m-1 swap swap-rotate relative md:hidden dropdown-end">
        <input bind:checked={open} type="checkbox" aria-label="Open nav menu" />
        <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" class="swap-off m-auto" viewBox="0 0 24 24">
          <g
            stroke="#a6adbb"
            stroke-dasharray="16"
            stroke-dashoffset="16"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M5 5h14" stroke-dashoffset="0" />
            <path d="M5 12h14" stroke-dashoffset="0" />
            <path d="M5 19h14" stroke-dashoffset="0" />
          </g>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" class="swap-on m-auto" width="80%" height="80%" viewBox="0 0 24 24">
          <g stroke="#a6adbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M12 12H12" opacity="0" />
            <path d="M5 5L19 19M5 19L19 5" />
          </g>
        </svg>
      </summary>
      <ul class="md:hidden menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><a href="/#hero">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/#projects">Projects</a></li>
      </ul>
    </details>
  </div>
</div>
