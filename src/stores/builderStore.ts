import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const QuestionType = Object.freeze({
    MULTIPLE_CHOICE: 'Multiple choice',
    FREE_TEXT: 'Free text',
})

export type QuestionValueType = typeof QuestionType[keyof typeof QuestionType]

export type Choice = {
    state: '1' | '2' | '3' | '4' | '5' | undefined;
    text: string | undefined;
}

export type MultipleChoice = {
    choices: Choice[] | undefined
}

export type FreeText = {
    placeholder?: string
}

export type Question = {
    id: string
    label: string | undefined
    type: {
        id: QuestionValueType
        value: MultipleChoice | FreeText | undefined
    } | undefined
}

export const useBuilderStore = defineStore('builder-store', () => {
    const questions = ref<Question[]>([])

    const getPlaceholderValue = computed(() => {
        return (question: Question) => {
            if (question.type?.id === QuestionType.FREE_TEXT && question.type.value) {
                return (question.type.value as FreeText).placeholder || ''
            }
            return ''
        }
    })

    const getChoiceValue = computed(() => {
        return (question: Question, choiceState: Choice['state']) => {
            if (question.type?.id === QuestionType.MULTIPLE_CHOICE) {
                const choiceText = (question.type.value as MultipleChoice)
                    .choices
                    ?.find(c => c.state = choiceState)
                    ?.text || ''

                console.log('choice state: ', choiceState)
                console.log('choice text: ', choiceText)
                return choiceText
            }
        }
    })

    function appendQuestion (question: Question) {
        questions.value.push(question)
    }

    function questionLabelUpdated ({
        questionId,
        text,
    }: { questionId: string, text: string }) {
        const questionToUpdate = questions.value.find(q => q.id === questionId)
        if (questionToUpdate) {
            questionToUpdate.label = text
        }
    }

    function questionTypeSelected ({
        questionId,
        selection,
    }: { questionId: string, selection: QuestionValueType }) {
        const questionToUpdate = questions.value.find(q => q.id === questionId)
        if (questionToUpdate) {
            let type: Question['type']
            if (selection === QuestionType.MULTIPLE_CHOICE) {
                type = {
                    id: QuestionType.MULTIPLE_CHOICE,
                    value: {
                        choices: [
                            {
                                state: '1',
                                text: undefined,
                            },
                            {
                                state: '3',
                                text: undefined,
                            },
                            {
                                state: '5',
                                text: undefined,
                            },
                        ],
                    },
                }
            } else {
                type = {
                    id: QuestionType.FREE_TEXT,
                    value: {
                        placeholder: undefined,
                    },
                }
            }
            questionToUpdate.type = type
        }
    }

    function updateFreeTextPlaceholder ({
        questionId,
        text,
    }: { questionId: string, text: string }) {
        const questionToUpdate = questions.value.find(q => q.id === questionId)
        if (
            questionToUpdate &&
            questionToUpdate.type?.id === QuestionType.FREE_TEXT &&
            questionToUpdate.type.value &&
            (questionToUpdate.type.value as FreeText).placeholder
        ) {
            (questionToUpdate.type.value as FreeText).placeholder = text
        }
    }

    function updateChoiceText ({
        questionId,
        choice,
        text,
    }: { questionId: string, choice: Choice['state'], text: string }) {
        const choiceToUpdate = (questions.value.find(q => q.id === questionId)
            ?.type
            ?.value as MultipleChoice)
            .choices
            ?.find(c => c.state = choice)

        if (choiceToUpdate) {
            console.log('choice state: ', choice, text)
            console.log('choice to update: ', choiceToUpdate)
            choiceToUpdate.text = text
        }
    }

    return {
        // state
        questions,

        // getters
        getPlaceholderValue,
        getChoiceValue,

        // actions
        appendQuestion,
        questionLabelUpdated,
        questionTypeSelected,
        updateFreeTextPlaceholder,
        updateChoiceText,
    }
}, {
    persist: true,
})
