<template>
    <Header>Survey builder</Header>
    <RouterLink to="/start">Back to start</RouterLink>
    <Form id="builder-form">
        <Form
            v-for="(q, index) in builderStore.questions"
            :id="'new-question-' + q.id"
            :key="q.id"
        >
            <VLabel v-if="q.label">{{ q.label }}</VLabel>
            <VLabel v-else>Question {{ index + 1 }}</VLabel>

            <v-text-field
                id="new-question-label-input"
                hide-details="auto"
                label="Question label"
                :model-value="q.label"
                variant="outlined"
                @input="(event: InputEvent) => questionLabelUpdated({
                    questionId: q.id,
                    text: (event?.target as HTMLInputElement)?.value
                })"
            />
            <v-select
                id="new-question-type-input"
                hide-details="auto"
                :items="[ 'Multiple choice', 'Free text']"
                label="Question type"
                :model-value="q.type?.id"
                variant="outlined"
                @update:model-value="(selection: string) => questionTypeSelected({
                    questionId: q.id,
                    selection: selection as QuestionValueType
                })"
            />

            <template v-if="q.type?.id === QuestionType.MULTIPLE_CHOICE">
                <v-text-field
                    :id="'choice-1-' + q.id"
                    label="state 1"
                    :model-value="builderStore.getChoiceValue(q, '1')"
                    placeholder="Add value for state 1 of multiple choice"
                    variant="underlined"
                />
                <v-text-field
                    :id="'choice-3-' + q.id"
                    label="state 3"
                    placeholder="Add value for state 3 of multiple choice"
                    :value="builderStore.getChoiceValue(q, '3')"
                    variant="underlined"
                    @input="(event: InputEvent) => updateChoiceText({
                        questionId: q.id,
                        choice: '3',
                        text: (event?.target as HTMLInputElement)?.value
                    })"
                />
                <v-text-field
                    :id="'choice-5-' + q.id"
                    label="state 5"
                    :model-value="builderStore.getChoiceValue(q, '5')"
                    placeholder="Add value for state 5 of multiple choice"
                    variant="underlined"
                    @input="(event: InputEvent) => updateChoiceText({
                        questionId: q.id,
                        choice: '5',
                        text: (event?.target as HTMLInputElement)?.value
                    })"
                />
            </template>

            <template v-if="q.type?.id === QuestionType.FREE_TEXT">
                <v-text-field
                    :id="'free-text-placeholder-' + q.id"
                    :model-value="builderStore.getPlaceholderValue(q)"
                    placeholder="Add placeholder text for input field"
                    variant="underlined"
                    @input="(event: InputEvent) => updateFreeTextPlaceholder({
                        questionId: q.id,
                        text: (event?.target as HTMLInputElement)?.value
                    })"
                />
            </template>
        </Form>

        <v-btn
            class="ed centered"
            size="large"
            variant="text"
            @click="addQuestion"
        >
            Add question
        </v-btn>

        <v-btn
            v-if="builderStore.questions.length"
            class="ed centered"
            size="large"
            variant="tonal"
        >
            Save survey
        </v-btn>

    </Form>

</template>

<script lang="ts" setup>
import Form from '@/components/Form.vue'
import Header from '@/components/Header.vue'
import {
    Choice,
    QuestionType,
    QuestionValueType,
    useBuilderStore,
} from '@/stores/builderStore'

const builderStore = useBuilderStore()

const addQuestion = () => {
    builderStore.appendQuestion({
        id: String(Date.now()),
        label: undefined,
        type: undefined,
    })
}

const questionLabelUpdated = ({
    questionId,
    text,
}: { questionId: string, text: string }) => {
    builderStore.questionLabelUpdated({
        questionId,
        text,
    })
}

const questionTypeSelected = ({
    questionId,
    selection,
}: { questionId: string, selection: QuestionValueType }) => {
    builderStore.questionTypeSelected({
        questionId,
        selection,
    })
}

const updateFreeTextPlaceholder = ({
    questionId,
    text,
}: { questionId: string, text: string }) => {
    builderStore.updateFreeTextPlaceholder({
        questionId,
        text,
    })
}

const updateChoiceText = ({
    questionId,
    choice,
    text,
}: { questionId: string, choice: Choice['state'], text: string }) => {
    builderStore.updateChoiceText({
        questionId,
        choice,
        text,
    })
}
</script>

<style scoped>
.ed.centered {
    justify-self: center;
}
</style>
