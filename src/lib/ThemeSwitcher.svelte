<script lang="ts">
    import "../app.css";
    let theme: string
    export let setFill: Function

    function themeSet(input: string) {
        document.documentElement.setAttribute('data-theme', input);
        theme = input;
    }

    function toggleTheme() {
        if (theme === 'dark') {
            themeSet('light');
        } else {
            themeSet('dark');
        }
        setFill();
    }

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        themeSet('dark');
    } else {
        themeSet('light');
    }
</script>

<symbol id="light" viewBox="0 0 16 16">
    <path fill="#1f2937" d="M6 .278a.77.77 0 0 1 .08.858a7.2 7.2 0 0 0-.878 3.46
    c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316a.73.73
    0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114
    1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</symbol>

<symbol id="dark" viewBox="0 0 16 16">
    <path fill="#a6adbb" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 0a.5.5 0 0 1
    .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0
    1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0
    0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m
    10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414
    a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0
    1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707
    0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5
    0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</symbol>

<button
    class="btn btn-square btn-sm bg-base-300 w-10 h-10 m-1 justify-center hidden md:flex"
    on:click={toggleTheme}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="80%" width="80%"
        viewBox="0 0 16 16"><use xlink:href="#{theme}"/></svg>
</button>