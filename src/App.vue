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
import { home_about } from './links/home_about';
import { program_code } from './links/program_code';
import { program_back } from './links/program_back';
import { program_map } from './links/program_maps';
import { program_local } from './links/program_local';
import { program_tool } from './links/program_tool';
import { program_front } from './links/program_front';
import { program_study } from './links/program_study';
import { design_frame } from './links/design_frame';
import { design_print } from './links/design_print';
import { makerdata } from './links/maker';
import { systermdata } from './links/systerm';
import { fun_game } from './links/fun_game';
import { fun_video } from './links/fun_video';
import { fun_music } from './links/fun_music';
import { fun_happy } from './links/fun_happy';
import { unfileddata } from './links/unfiled';
import { command } from './text/command';
import PanelLink from './components/PanelLink.vue';
import AccordionText from './components/AccordionText.vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>
<!-- class="border-1" style="border: 2px solid #4CAF50; border-radius: 5px;" -->
<template>
  <Tabs value="0">
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
      <Tab value="6" as="div" class="flex items-center gap-2">
        <Avatar image="/shenping.jpg" shape="circle" />
        <span class="font-bold whitespace-nowrap">命令</span>
      </Tab>
    </TabList>
    <TabPanels class="m-0 p-0">
      <!-- 主页 -->
      <TabPanel value="0" class="m-0">
        <PanelLink :data="home_navigation" title="导航" />
        <PanelLink :data="home_common" title="常用" />
        <PanelLink :data="home_work" title="工作" />
        <PanelLink :data="home_tool" title="在线工具" />
        <PanelLink :data="home_about" title="关于" />
      </TabPanel>
      <!-- 编程 -->
      <TabPanel value="1" as="p" class="m-0">
        <PanelLink :data="program_local" title="本地" />
        <PanelLink :data="program_code" title="代码" />
        <PanelLink :data="program_back" title="后端" />
        <PanelLink :data="program_front" title="页面" />
        <PanelLink :data="program_map" title="地图" />
        <PanelLink :data="program_tool" title="工具" />
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
        <PanelLink :data="systermdata" title="系统" />
      </TabPanel>
      <!-- 摸鱼 -->
      <TabPanel value="4" as="p" class="m-0">
        <PanelLink :data="fun_video" title="视频" />
        <PanelLink :data="fun_music" title="音乐" />
        <PanelLink :data="fun_game" title="游戏" />
        <PanelLink :data="fun_happy" title="玩乐" />
      </TabPanel>
      <!-- 未分类 -->
      <TabPanel value="5" as="p" class="m-0">
        <PanelLink :data="unfileddata" title="未分类" />
      </TabPanel>
      <!-- 命令 -->
      <TabPanel value="6" as="p" class="m-0">
        <AccordionText :data="command" />
      </TabPanel>
    </TabPanels>
  </Tabs>


</template>

<style scoped></style>
