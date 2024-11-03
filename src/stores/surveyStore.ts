import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSurveyStore = defineStore('survey-store', () => {
    const frequencyChoice = ref<string>('')
    const freeText = ref<string>('')

    const likertData = ref([
        {
            id: '1',
            isSelected: false,
            text: 'Never',
            state: 1,
            value: 'never',
        },
        {
            id: '2',
            isSelected: false,
            text: 'Rarely',
            state: 2,
            value: 'rarely',
        },
        {
            id: '3',
            isSelected: false,
            text: 'Sometimes',
            state: 3,
            value: 'sometimes',
        },
        {
            id: '4',
            isSelected: false,
            text: 'Quite often',
            state: 4,
            value: 'quite-often',
        },
        {
            id: '5',
            isSelected: false,
            text: 'Very often',
            state: 5,
            value: 'very-often',
        },
    ])

    return {
        frequencyChoice,
        freeText,

        likertData,
    }
}, {
    persist: true,
})
