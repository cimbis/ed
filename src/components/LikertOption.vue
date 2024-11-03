<template>
    <label class="ed likert-option" :for="props.id">
        <span class="ed likert-option-state" :class="'state-' + state" />
        <span class="ed likert-option-text">
            <span class="text w-100">{{ props.optionText }}</span>
            <input
                :id="props.id"
                :checked="props.isSelected"
                class="ed likert-radio"
                :name="props.name"
                type="radio"
                :value="props.value"
                @change="$emit('change', props.value)"
            >
        </span>
    </label>
</template>
<script lang="ts" setup>

const props = defineProps<{
    id: string,
    isSelected: boolean,
    name: string,
    optionText: string,
    state: number,
    value: string;
}>()

defineEmits<{
    change: [value: string]
}>()
</script>

<style scoped>
.ed.likert-option {
    width: 100%;
    height: 2.5rem;
    display: flex;
    border: 0.0625rem solid var(--border-color);
    border-radius: var(--border-radius-sm);
}

.ed.likert-option-state {
    width: 0.125rem;
    outline: 0.0625rem solid var(--emphasis-3);
    border-top-left-radius: var(--border-radius-sm);
    border-bottom-left-radius: var(--border-radius-sm);
    background-color: var(--emphasis-3);
}

.ed.likert-option-state.state-1 {
    outline-color: var(--emphasis-1);
    background-color: var(--emphasis-1);
}

.ed.likert-option-state.state-2 {
    outline-color: var(--emphasis-2);
    background-color: var(--emphasis-2);
}

.ed.likert-option-state.state-3 {
    outline-color: var(--emphasis-3);
    background-color: var(--emphasis-3);
}

.ed.likert-option-state.state-4 {
    outline-color: var(--emphasis-4);
    background-color: var(--emphasis-4);
}

.ed.likert-option-state.state-5 {
    outline-color: var(--emphasis-5);
    background-color: var(--emphasis-5);
}

.ed.likert-option-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.75rem;
}

.ed.likert-option-text .text {
    font-size: 0.875rem;
}

@media screen and (min-width: 45rem) {

}

@media (hover: hover) and (pointer: fine) {
    .ed.likert-option:hover {
        border-color: var(--border-color-active);
        cursor: pointer;
    }
}
</style>

<style>
.ed.likert-radio i svg {
    width: 1rem;
    height: 1rem;
}
</style>/
