<template>
    <v-app theme="light">
        <v-main class="ed main">
            <Header title="Edu survey" />
            <Survey id="survey1" @submit="submitSurvey">
                <FormControl>
                    <VLabel id="options-label">How frequently do you fill in
                        surveys?
                    </VLabel>
                    <LikertOptionGroup id="options" aria-labelledby="options-label">
                        <LikertOption
                            v-for="ld in surveyStore.likertData"
                            :id="ld.id"
                            :key="ld.id"
                            :is-selected="surveyStore.frequencyChoice === ld.value"
                            name="frequency"
                            :option-text="ld.text"
                            :state="ld.state"
                            :value="ld.value"
                            @change="updateLikertData"
                        />
                    </LikertOptionGroup>
                </FormControl>

                <FormControl>
                    <VLabel for="textarea" text="Free form comments" />
                    <VTextarea
                        id="textarea"
                        hide-details="auto"
                        :model-value="surveyStore.freeText"
                        placeholder="Tell us about your experience"
                        rows="3"
                        variant="outlined"
                        @update:model-value="updateFreeText"
                    />
                </FormControl>

                <v-btn type="submit" variant="tonal">Submit</v-btn>
            </Survey>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import FormControl from '@/components/FormControl.vue'
import Header from '@/components/Header.vue'
import LikertOption from '@/components/LikertOption.vue'
import Survey from '@/components/Survey.vue'
import { useSurveyStore } from '@/stores/surveyStore'

const surveyStore = useSurveyStore()

const updateLikertData = (optionValue: string) => {
    surveyStore.frequencyChoice = optionValue
}

const updateFreeText = (text: string) => {
    surveyStore.freeText = text
}

const submitSurvey = (surveyId: string) => {
    console.log(surveyId)
}
</script>

<style>
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
