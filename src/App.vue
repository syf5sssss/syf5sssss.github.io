<script setup lang="ts">

import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import Avatar from 'primevue/avatar';
import { home_navigation } from './links/home_navigation';
import { home_common } from './links/home_common';
import { home_tool } from './links/home_tool';
import { home_work } from './links/home_work';
import { program_code } from './links/program_code';
import { program_back } from './links/program_back';
import { program_front } from './links/program_front';
import { program_study } from './links/program_study';
import { design_frame } from './links/design_frame';
import { design_print } from './links/design_print';
import { makerdata } from './links/maker';
import { fun_game } from './links/fun_game';
import { fun_video } from './links/fun_video';
import { fun_music } from './links/fun_music';
import { unfileddata } from './links/unfiled';
import PanelLink from './component/PanelLink.vue';

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
      <!-- 主页 -->
      <TabPanel value="0" class="m-0">
        <PanelLink :data="home_navigation" title="导航" />
        <PanelLink :data="home_common" title="常用" />
        <PanelLink :data="home_work" title="工作" />
        <PanelLink :data="home_tool" title="工具" />
      </TabPanel>
      <!-- 编程 -->
      <TabPanel value="1" as="p" class="m-0">
        <PanelLink :data="program_code" title="代码" />
        <PanelLink :data="program_back" title="后端" />
        <PanelLink :data="program_front" title="页面" />
        <PanelLink :data="program_study" title="学习" />
      </TabPanel>
      <!-- 设计 -->
      <TabPanel value="2" as="p" class="m-0">
        <PanelLink :data="design_frame" title="画面" />
        <PanelLink :data="design_print" title="打印" />
      </TabPanel>
      <!-- 创客 -->
      <TabPanel value="3" as="p" class="m-0">
        <PanelLink :data="makerdata" title="创客" />
      </TabPanel>
      <!-- 摸鱼 -->
      <TabPanel value="4" as="p" class="m-0">
        <PanelLink :data="fun_video" title="视频" />
        <PanelLink :data="fun_music" title="音乐" />
        <PanelLink :data="fun_game" title="游戏" />
      </TabPanel>
      <!-- 未分类 -->
      <TabPanel value="5" as="p" class="m-0">
        <PanelLink :data="unfileddata" title="未分类" />
      </TabPanel>
    </TabPanels>
  </Tabs>


</template>

<style scoped></style>
