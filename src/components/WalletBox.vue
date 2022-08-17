<template>
  <q-list separator>
    <q-item class="q-pa-none bg-green-02" tag="a" :href="`/#/all/${classify}`">
      <q-avatar font-size="16px" class="q-mr-sm q-my-sm wallet-num wallet-all"
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
</template>

<script setup lang="ts">
import WalletItem, { walletProps } from 'components/WalletItem.vue';
import { ref } from 'vue';

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

const searchText = ref('');

interface props {
  walletNum: string;
  classify: string;
}
withDefaults(defineProps<props>(), {
  walletNum: '1',
  classify: 'assets',
});
</script>
