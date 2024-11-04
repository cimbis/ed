<template>
    <v-app-bar>
        <div class="d-flex justify-space-between align-center w-100 px-4">
            <v-icon :icon="mdiHamburger" />
            <div class="ed header-title">
                <slot />
            </div>
            <v-icon :icon="mdiMagnify" />
        </div>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { mdiHamburger, mdiMagnify } from '@mdi/js'
</script>

<style scoped>
.ed.header-title {
    font-size: 1.375rem;
}
</style>
