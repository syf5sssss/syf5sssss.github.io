<template>
    <Accordion value="0">
        <AccordionPanel v-for="tab in data" :key="tab.title" :value="tab.value">
            <AccordionHeader>{{ tab.title }}</AccordionHeader>
            <AccordionContent v-for="t in tab.content">
                <div class="m-0">{{ t }}</div>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</template>

<script setup>
import { defineProps } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


// 定义props
const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});


</script>

<style scoped></style>