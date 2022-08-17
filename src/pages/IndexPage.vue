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
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-for="nft in wallets"
            :key="`nft-${nft.tx_hash}`"
            expand-separator
            :label="nft.asset_list[0].policy_id"
          >
            <q-separator></q-separator>
            <q-expansion-item
              v-for="asset in nft.asset_list"
              :key="`asset-${asset.asset_name}`"
              expand-separator
            >
              <template v-slot:header>
                <q-checkbox v-model="store.selections" :val="asset" />
                <q-item-section avatar>
                  <q-avatar>1</q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ asset.asset_name }}</q-item-label>
                  <q-item-label caption>{{
                    route.params.classify?.toString()
                  }}</q-item-label>
                  <q-item-label caption>{{ data.name }}</q-item-label>
                </q-item-section>

                <q-item-section side> {{ asset.quantity }}x </q-item-section>
              </template>
              <q-card>
                <q-card-section class="row">
                  <div class="col-8">
                    <h6 class="q-mt-none q-mb-md">Properties:</h6>
                    <p>
                      Asset Name: <span>{{ asset.asset_name }}</span>
                    </p>
                    <p>
                      Policy Id: <span>{{ asset.policy_id }}</span>
                    </p>
                    <p>Fingerprint: <span>fg43f43</span></p>
                    <p>Metadata Type: <span>721</span></p>
                    <p>
                      Sources Type:
                      <span>{{
                        asset.data.last_metadata.mediaType ?? 'image/jpeg'
                      }}</span>
                    </p>
                    <p>
                      Source Link:
                      <span>{{ asset.data.last_metadata.image }}</span>
                    </p>
                    <p>
                      Quantity: <span>{{ asset.quantity }}</span>
                    </p>
                  </div>
                  <div class="col-4">
                    <h6 class="q-mt-none q-mb-md">Metadata:</h6>
                    <p>Legs: <span>Yes</span></p>
                    <p>Head: <span>Yes</span></p>
                    <p>Hands: <span>Yes</span></p>
                    <p>Body: <span>Yes</span></p>
                    <p>Eyes: <span>Yes</span></p>
                    <p>Mouth: <span>Yes</span></p>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { mockupData } from 'components/models';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useTransactionStore } from 'stores/transactions';

const route = useRoute();
const data = mockupData[0];
const searchText = ref('');
const selections = ref([]);
const store = useTransactionStore();
const wallets = computed(() => {
  return data.utxo_set.map((x) => {
    return {
      ...x,
      asset_list: x.asset_list.map((y) => ({ ...y, walletName: data.name })),
    };
  });
});
watch(selections, () => {
  console.log(selections);
});
</script>
