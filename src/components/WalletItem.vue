<template>
  <q-item
    clickable
    tag="a"
    :href="`/#/${num}/${classify.toLowerCase()}`"
    class="q-pa-none"
  >
    <q-avatar font-size="16px" class="q-ma-sm">{{ num }}</q-avatar>
    <q-separator vertical></q-separator>
    <q-item-section class="q-pa-sm">
      <q-item-label class="text-center">{{ name }}</q-item-label>
      <q-item-label caption class="text-center">{{
        shortenAddress(address)
      }}</q-item-label>
      <q-item-label caption class="flex justify-between q-px-md">
        <span>{{ qty }}</span>
        <span>${{ usd }}</span>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { shortenAddress } from 'src/utils';

export interface walletProps {
  name: string;
  address: string;
  qty: number;
  usd: number;
}
interface props {
  name: string;
  address: string;
  qty: number;
  usd: number;
  num: number;
  classify: string;
}
withDefaults(defineProps<props>(), {
  caption: '',
  link: '#',
  icon: '',
  num: 0,
  classify: 'nft',
});
</script>
