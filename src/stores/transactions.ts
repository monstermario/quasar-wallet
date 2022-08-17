import { defineStore } from 'pinia';

export interface TypeSelection {
  asset_name: string;
  policy_id: string;
  walletName: string;
}

interface StateInterface {
  selections: TypeSelection[];
}

export const useTransactionStore = defineStore('transactions', {
  state: (): StateInterface => ({
    selections: [],
  }),
  getters: {
    transactions: (state) => {
      const transactions: any = {};
      for (let i = 0; i < state.selections.length; i++) {
        const walletName = state.selections[i].walletName;
        if (walletName) {
          if (!transactions[walletName]) transactions[walletName] = [];
          transactions[walletName].push(state.selections[i]);
        }
      }
      return Object.keys(transactions).map((x) => transactions[x]);
    },
  },
  actions: {
    removeSelect(asset_name: string) {
      this.selections = this.selections.filter(
        (x) => x.asset_name !== asset_name
      );
    },
    clearSelection() {
      this.selections = [];
    },
  },
});
