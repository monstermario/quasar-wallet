<template>
  <q-item
    clickable
    tag="a"
    :href="`/#/${num}/${classify.toLowerCase()}`"
    class="q-pa-none flex items-center"
    :class="
      currentNum === num.toString() || currentNum === 'all'
        ? 'wallet-hover'
        : ''
    "
  >
    <q-avatar
      font-size="16px"
      class="q-mr-sm q-my-sm wallet-num"
      :style="{ background: color }"
      >{{ num }}</q-avatar
    >
    <!-- <q-separator vertical></q-separator> -->
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
import randomColor from 'randomColor';
import { computed } from 'vue';
import { useQuasar } from 'quasar';

interface props {
  name: string;
  address: string;
  qty: number;
  usd: number;
  num: number;
  classify: string;
  currentNum: string;
}
withDefaults(defineProps<props>(), {
  caption: '',
  link: '#',
  icon: '',
  num: 0,
  classify: 'assets',
  currentNum: '1',
});
const $q = useQuasar();

const color = computed(() => {
  return randomColor({
    luminosity: $q.dark.isActive ? 'light' : 'dark',
    hue: 'rgb',
    alpha: 0.5,
  });
});
</script>
