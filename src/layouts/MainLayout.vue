<template>
  <q-layout view="lHr Lpr lFr">
    <q-header bordered class="bg-transparent text-black">
      <TopBar :wallet-num="walletNum" />
    </q-header>

    <q-footer bordered class="bg-transparent text-black">
      <FooterBar />
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="0"
      bordered
      :width="200"
      class="flex no-wrap column"
    >
      <WalletBox :classify="classify" :wallet-num="walletNum" />
    </q-drawer>

    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      :breakpoint="0"
      bordered
      :width="292"
    >
      <TransactionBox />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { useRoute } from 'vue-router';
import TopBar from '../components/TopBar.vue';
import TransactionBox from 'src/components/TransactionBox.vue';
import WalletBox from 'src/components/WalletBox.vue';
import FooterBar from 'src/components/FooterBar.vue';
import { useTransactionStore } from 'src/stores/transactions';

// import { date } from 'quasar';

const route = useRoute();
const store = useTransactionStore();

const walletNum = ref('1');
const classify = ref('assets');

const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(true);

const getParams = () => {
  const params = route.params;
  if (params.walletnum && params.classify) {
    classify.value = params.classify.toString();
    walletNum.value = params.walletnum.toString();
  }
  store.clearSelection();
};

onMounted(getParams);

onUpdated(getParams);
</script>
