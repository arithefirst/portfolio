<script lang="ts">
    import ThemeSwitcher from "./ThemeSwitcher.svelte";

    let fill: string;
    let open: boolean;

    function setFill() {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            fill = "#a6adbb";
        } else {
            fill = "#1f2937";
        }
    }

    setFill()
</script>

<div class="fixed w-full h-12 bg-base-200">
    <ThemeSwitcher {setFill}/>
    <details bind:open={open} class="dropdown">
        <summary class="btn btn-square btn-sm bg-base-300 w-10 h-10 m-1 swap swap-rotate relative md:hidden dropdown-end">
            <input bind:checked={open} type="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" class="swap-off m-auto" viewBox="0 0 24 24">
                <g {fill} stroke={fill} stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M5 5h14" stroke-dashoffset="0" />
                    <path d="M5 12h14" stroke-dashoffset="0" />
                    <path d="M5 19h14" stroke-dashoffset="0" />
                </g>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="swap-on m-auto" width="80%" height="80%" viewBox="0 0 24 24">
                <g {fill} stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M12 12H12" opacity="0" />
                    <path d="M5 5L19 19M5 19L19 5" />
                </g>
            </svg>
        </summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
    </details>

</div>