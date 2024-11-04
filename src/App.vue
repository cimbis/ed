<template>
    <v-app theme="light">
        <v-main class="ed main">
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>

</script>

<style>
div, span, input, textarea {
    box-sizing: border-box;
}

:root {
    --border-color: #7575751f;
    --border-color-active: #7575755e;
    --emphasis-1: #EA0056;
    --emphasis-2: #F2A100;
    --emphasis-3: #1E1E1E;
    --emphasis-4: #75AD6F;
    --emphasis-5: #278E58;

    --border-radius-sm: 0.25rem;
    --border-radius-md: 0.5rem;
    --border-radius-xl: 0.75rem;
}

.ed.main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 1rem 0;
}

@media screen and (min-width: 45rem) {
    .ed.main {
        margin: 4rem auto 0;
        max-width: 45rem;
        width: 100%;
    }
}
</style>
