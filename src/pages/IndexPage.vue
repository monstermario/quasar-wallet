<template>
  <q-page>
    <q-list class="flex no-wrap">
      <q-item class="full-width">
        <q-input
          v-model="searchText"
          class="full-width"
          borderless
          label="Search.."
          dense
        >
          <template v-slot:append>
            <q-icon
              name="close"
              @click="searchText = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
      </q-item>
      <q-item>
        <q-btn>SORT</q-btn>
      </q-item>
      <q-item>
        <q-btn>FILTER</q-btn>
      </q-item>
    </q-list>
    <q-separator></q-separator>
    <div class="fit-main">
      <q-scroll-area class="fit">
        <div class="row q-col-gutter-sm">
          <div class="col-4" v-for="nft in nfts" :key="`nft-${nft.id}`">
            <img class="full-width" :src="nft.img" />
          </div>
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { Nft, Meta } from 'components/models';
import { ref } from 'vue';

const nfts = ref<Nft[]>([
  {
    id: 1,
    img: '/img/nft.png',
  },
  {
    id: 2,
    img: '/img/nft.png',
  },
  {
    id: 3,
    img: '/img/nft.png',
  },
  {
    id: 4,
    img: '/img/nft.png',
  },
  {
    id: 5,
    img: '/img/nft.png',
  },
  {
    id: 6,
    img: '/img/nft.png',
  },
  {
    id: 7,
    img: '/img/nft.png',
  },
]);
const searchText = ref('');
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>

<style>
.fit-main {
  height: calc(100vh - 173px);
  overflow-y: auto;
}
.bg-transparent {
  background: transparent;
}
</style>
