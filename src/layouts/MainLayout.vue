<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-transparent text-black">
      <q-toolbar class="q-pa-none">
        <q-list separator class="flex items-center full-width no-wrap">
          <template v-for="nav in navs" :key="nav">
            <q-item
              tag="a"
              :href="`/#/${walletNum}/${nav.toLowerCase()}`"
              class="flex justify-center items-center full-width"
              style="height: 64px"
              >{{ nav }}
            </q-item>
            <q-separator vertical></q-separator>
          </template>
          <q-item
            tag="a"
            class="flex justify-center items-center full-width bg-negative text-white"
            style="height: 64px"
            >SETTINGS
          </q-item>
        </q-list>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-transparent text-black">
      <q-toolbar class="q-pa-none">
        <q-separator />
        <q-list class="flex items-center justify-between full-width no-wrap">
          <q-item>
            <q-item-section dense>
              Last Refresh: {{ lastTime }}
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section dense>Now: {{ currentTime }}</q-item-section>
          </q-item>
          <q-item>
            <q-toggle
              dense
              v-model="isLight"
              size="md"
              checked-icon="light_mode"
              color="grey"
              unchecked-icon="dark_mode"
              @click="$q.dark.toggle()"
            />
          </q-item>
          <q-item>
            <q-item-section dense>Version: 2.0.0 BETA</q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="0"
      bordered
      :width="200"
      class="flex no-wrap column"
    >
      <q-list separator>
        <q-item
          class="q-pa-none bg-green-02"
          tag="a"
          :href="`/#/all/${classify}`"
        >
          <q-avatar
            font-size="16px"
            class="q-mr-sm q-my-sm wallet-num wallet-all"
            >ALL</q-avatar
          >
          <q-separator vertical></q-separator>
          <q-item-section class="q-pa-sm">
            <q-item-label class="justify-between flex q-px-md">
              <span>15</span>
              <span>$20</span>
            </q-item-label>
            <q-item-label class="text-center"
              >Assets: {{ wallets.length }}</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item>
          <q-input v-model="searchText" borderless label="Search.." dense>
            <template v-slot:append>
              <q-icon
                name="close"
                @click="searchText = ''"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </q-item>
      </q-list>
      <q-separator></q-separator>
      <q-scroll-area class="fit">
        <q-list separator>
          <template v-for="(wallet, index) in wallets" :key="wallet.address">
            <WalletItem
              v-if="wallet.name.includes(searchText) || searchText === ''"
              :num="index + 1"
              :classify="classify"
              :currentNum="walletNum"
              v-bind="wallet"
            />
          </template>
          <q-separator></q-separator>
        </q-list>
      </q-scroll-area>
      <q-separator />
      <q-item
        clickable
        class="flex bg-negative text-white"
        style="min-height: 50px"
      >
        <q-item-section class="text-center">WALLET MANAGEMENT</q-item-section>
      </q-item>
    </q-drawer>

    <q-drawer side="right" v-model="rightDrawerOpen" :breakpoint="0" bordered>
      <q-list bordered separator class="full-height flex column no-wrap">
        <q-item
          class="flex justify-center items-center"
          style="min-height: 55px"
        >
          <q-item-label header> TRANSACTION </q-item-label>
        </q-item>

        <q-item class="full-height q-pr-none">
          <q-scroll-area class="fit q-pr-md">
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
            <q-item-label caption>INPUTS:</q-item-label>
          </q-scroll-area>
        </q-item>
        <q-item class="full-height q-pr-none">
          <q-scroll-area class="fit q-pr-md">
            <q-item-label caption>OUTPUTS:</q-item-label>
          </q-scroll-area>
        </q-item>
        <q-btn size="lg" color="primary">
          <!-- <q-item-section class="text-center">SUBMIT</q-item-section> -->
          SUBMIT
        </q-btn>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import WalletItem, { walletProps } from 'components/WalletItem.vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
// import { date } from 'quasar';

const route = useRoute();
const $q = useQuasar();
const wallets: walletProps[] = [
  {
    name: 'Wallet1',
    address: '0x93c5fe5242697aee0c5059dDD36034390E6A494b',
    qty: 10,
    usd: 10,
  },
  {
    name: 'Wallet2',
    address: '0x93c5fe5242697aee0c5059dDD36034390E6A4941',
    qty: 15,
    usd: 50,
  },
  {
    name: 'Wallet3',
    address: '0x93c5fe5242697aee0c5059dDD36034390E6A4942',
    qty: 10,
    usd: 20,
  },
  {
    name: 'Wallet4',
    address: '0x93c5fe5242697aee0c5059dDD36034390E6A4943',
    qty: 30,
    usd: 30,
  },
  {
    name: 'Wallet5',
    address: '0x93c5fe5242697aee0c5059dDD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet6',
    address: '0x93c5fe5242697awe0c5059dDD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet7',
    address: '0x93c5fe5242697aee0c5059eDD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet8',
    address: '0x93c5fe5242697aee0c5059dDD36023390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet9',
    address: '0x93c5fe5242697aee0c5219dDD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet10',
    address: '0x93c5f32242697aee0c5059dDD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet11',
    address: '0x93c5fe5233697aee0c5059dDD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet12',
    address: '0x93c5fe5242697aee0c50544DD36034390E6A4944',
    qty: 20,
    usd: 40,
  },
  {
    name: 'Wallet13',
    address: '0x93c5fe5242697aee0c505955D36034390E6A4944',
    qty: 20,
    usd: 40,
  },
];

const navs: string[] = ['ASSETS', 'MARKET', 'TRANSACTION', 'STAKING', 'VOTING'];

const searchText = ref('');
const walletNum = ref('1');
const classify = ref(navs[0]);
const lastTime = ref(new Date(Date.now()).toLocaleString());
const currentTime = ref(new Date(Date.now()).toLocaleString());

const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(true);
const isLight = ref(!$q.dark.isActive);

let timer: any;

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = new Date(Date.now()).toLocaleString();
  }, 1000);
});
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
onUpdated(() => {
  const params = route.params;
  lastTime.value = new Date(Date.now()).toLocaleString();
  if (params.walletnum && params.classify) {
    classify.value = params.classify.toString();
    walletNum.value = params.walletnum.toString();
  }
});

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
// function toggleRightDrawer() {
//   rightDrawerOpen.value = !rightDrawerOpen.value;
// }
</script>
