<template>
    <Fieldset :legend="title"
        :pt="{ root: { style: 'padding: 0 5px 0 5px' }, legend: { style: 'padding: 5px 0 5px 0' } }">
        <DataView :value="data" layout="grid">
            <template #grid="slotProps">
                <div class="grid">
                    <div class="sm:col-6 md:col-3 lg:col-2 xl:col-1 " v-for="(item, index) in slotProps.items"
                        :key="index">
                        <Button severity="secondary" style="height: 30px;padding-left: 0;padding-right: 1;"
                            @click="go(item)">
                            <img :src="item.src" style="height: 20px; " />
                            <span :style="{ fontSize: item.fontsize + 'px', textAlign: 'left' }">
                                {{ item.title }}
                            </span>
                        </Button>
                    </div>
                </div>
            </template>
        </DataView>
    </Fieldset>
    <!-- 去控件API 找到 Custom passthrough(pt) options. Props就是 pt的key  outlined-->
    <!-- <Panel class="mb-1 mt-2 p-panel" toggleable :header="title"
        :pt="{ content: { style: 'padding: 0 5px 0 5px' }, header: { style: 'font-size: 13px; height: 35px;' } }">
        <DataView :value="data" layout="grid">
            <template #grid="slotProps">
                <div class="grid">
                    <div class="sm:col-6 md:col-3 lg:col-2 xl:col-1 " v-for="(item, index) in slotProps.items"
                        :key="index">
                        <Button severity="secondary" style="height: 30px;padding-left: 0;padding-right: 1;"
                            @click="go(item)">
                            <img :src="item.src" style="height: 20px; " />
                            <span :style="{ fontSize: item.fontsize + 'px', textAlign: 'left' }">
                                {{ item.title }}
                            </span>
                        </Button>
                    </div>
                </div>
            </template>
        </DataView>
    </Panel> -->
</template>

<script setup>
import { defineProps } from 'vue';
import DataView from 'primevue/dataview';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';


// 定义props
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
});

function go(item) {
    window.open(item.url, "_blank");
    // window.location.href = item.url; 
    //http://www.baidu.com可以跳转，www.baidu.com不能跳转，会停留在原页面，地址栏改为 http://localhost:5173/www.baidu.com
}
</script>

<style scoped></style>