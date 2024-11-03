<template>
    <div
        :id="props.id"
        class="ed likert-option-group"
        role="radiogroup"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
// TODO: A11Y - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role
const props = defineProps<{
    id: string
}>()
</script>

<style scoped>
.ed.likert-option-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;
}

@media screen and (min-width: 45rem) {
    .ed.likert-option-group {
        flex-direction: row;
        gap: 1rem;
    }
}
</style>
