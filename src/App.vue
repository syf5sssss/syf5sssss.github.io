<script setup lang="ts">

import DataView from 'primevue/dataview';
import Button from 'primevue/button';
import Chip from 'primevue/chip';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar';
import Panel from 'primevue/panel';
import { linkdata } from './link';

function save(item: any) {
  window.open(item.url, "_blank");
  // window.location.href = item.url; http://www.baidu.com可以跳转，www.baidu.com不能跳转，会停留在原页面，地址栏改为 http://localhost:5173/www.baidu.com
}

import { ref, onMounted } from "vue";

onMounted(() => {
});


</script>

<template>
  <Tabs value="0" class="border-1" style="border: 2px solid #4CAF50; border-radius: 5px;">
    <TabList>
      <Tab value="0" as="div" class="flex items-center gap-2">
        <Avatar image="/lufei.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">主页</span>
      </Tab>
      <Tab value="1" as="div" class="flex items-center gap-2">
        <Avatar image="/suolong.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">编程</span>
      </Tab>
      <Tab value="2" as="div" class="flex items-center gap-2">
        <Avatar image="/luobin.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">设计</span>
      </Tab>
      <Tab value="3" as="div" class="flex items-center gap-2">
        <Avatar image="/wushuopu.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">创客</span>
      </Tab>
      <Tab value="4" as="div" class="flex items-center gap-2">
        <Avatar image="/qiaoba.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">摸鱼</span>
      </Tab>
      <Tab value="5" as="div" class="flex items-center gap-2">
        <Avatar image="/folangqi.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">未分类</span>
      </Tab>

    </TabList>

    <TabPanels class="m-0 p-0">
      <TabPanel value="0" class="m-0">
        <Panel class="mb-1 mt-4">
          <DataView :value="linkdata" layout="grid">
            <template #grid="slotProps">
              <div class="grid">
                <div class="col-1" v-for="(item, index) in slotProps.items" :key="index">
                  <Tag severity="success" @click="save(item)">
                    <img :src="item.src" style="width: 18px" />
                    <span>{{ item.title }}</span>
                  </Tag>
                </div>
              </div>
            </template>
          </DataView>
        </Panel>
      </TabPanel>
      <TabPanel value="1" as="p" class="m-0">
        <Panel class="mb-1 mt-2">
          <DataView :value="linkdata" layout="grid">
            <template #grid="slotProps">
              <div class="grid">
                <div class="col-1" v-for="(item, index) in slotProps.items" :key="index">
                  <Chip :label="item.title" :style="{ height: '28px', paddingLeft: 0, paddingRight: 1 }">
                    <img :src="item.src" :style="{ width: '18px', height: '18px' }" />
                    <span style="font-size: 12px;  text-align: left;">
                      {{ item.title }}
                    </span>
                  </Chip>
                </div>
              </div>
            </template>
          </DataView>
        </Panel>
      </TabPanel>
      <TabPanel value="2" as="p" class="m-0">
        <Panel class="mb-1 mt-2">
          <DataView :value="linkdata" layout="grid">
            <template #grid="slotProps">
              <div class="grid">
                <div class="col-1" v-for="(item, index) in slotProps.items" :key="index">
                  <Button outlined style="height: 30px;padding-left: 0;padding-right: 1;">
                    <img :src="item.src" style="height: 20px; " />
                    <span :style="{ fontSize: item.fontsize + 'px', textAlign: 'left' }">
                      {{ item.title }}
                    </span>
                  </Button>
                </div>
              </div>
            </template>
          </DataView>
        </Panel>
      </TabPanel>
      <TabPanel value="3" as="p" class="m-0">

      </TabPanel>
      <TabPanel value="4" as="p" class="m-0">

      </TabPanel>
      <TabPanel value="5" as="p" class="m-0">

      </TabPanel>
    </TabPanels>
  </Tabs>


</template>

<style scoped></style>
