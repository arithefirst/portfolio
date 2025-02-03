<script lang="ts">
  let open: boolean = false;
</script>

<nav
  class={`navbar fixed top-0 z-[1000] rounded-b-2xl border-2 backdrop-blur-sm
  backdrop-filter md:inset-x-0 md:top-2 md:mx-auto md:w-11/12 md:rounded-2xl 2xl:h-20
  ${document.documentElement.getAttribute('data-navbar-override') !== null ? 'border-base-200 bg-base-200' : 'border-nav-border bg-nav'}`}
>
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-xl text-white 2xl:text-2xl">arithefirst</a>
  </div>
  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal px-1 text-white">
      <li><a class="2xl:text-lg" href="/#hero">Home</a></li>
      <li><a class="2xl:text-lg" href="/contact">Contact</a></li>
      <li><a class="2xl:text-lg" href="/#projects">Projects</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <details bind:open class="dropdown dropdown-end">
      <summary class="btn btn-square dropdown-end swap swap-rotate btn-sm relative m-1 h-10 w-10 bg-base-300 md:hidden">
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
      <ul class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow md:hidden">
        <li><a href="/#hero">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/#projects">Projects</a></li>
      </ul>
    </details>
  </div>
</nav>
