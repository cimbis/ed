<template>
    <form
        :id="props.id"
        class="ed survey-container"
        @submit="$emit('submit', props.id)"
    >
        <slot />
    </form>
</template>

<script lang="ts" setup>
defineEmits<{
    submit: [id: string]
}>()

const props = defineProps<{
    id: string
}>()
</script>

<style scoped>
.ed.survey-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 0.0625rem solid var(--border-color);
    border-radius: var(--border-radius-md);
}

@media screen and (min-width: 45rem) {
    .ed.survey-container {
        gap: 1.5rem;
        padding: 1.5rem;
    }
}
</style>
