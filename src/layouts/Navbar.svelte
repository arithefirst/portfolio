<script lang="ts">
  let open: boolean = false;
</script>

<nav
  class="fixed md:mx-auto 2xl:h-20 md:inset-x-0 backdrop-filter backdrop-blur-sm rounded-b-2xl top-0 md:top-2 md:rounded-2xl md:w-11/12 navbar bg-nav border-2 border-nav-border z-[1000]"
>
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-white text-xl 2xl:text-2xl">arithefirst</a>
  </div>
  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal text-white px-1">
      <li><a class="2xl:text-lg" href="/#hero">Home</a></li>
      <li><a class="2xl:text-lg" href="/contact">Contact</a></li>
      <li><a class="2xl:text-lg" href="/#projects">Projects</a></li>
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
</nav>
