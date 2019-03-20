import Vue from 'vue'
import Vuex from 'vuex'
import VuexWebExtensions from 'vuex-webextensions'
import { getField, updateField } from 'vuex-map-fields'

import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		foo: 'bar',
		wallet: {},
		options: {},
		settings: {},
		wallets: [],
		forms:  { name: '', address: '', server: '', quantity: 0 }
	},
	getters: {
		...getters,
		getField
	},
	mutations: {
		...mutations,
		updateField
	},
	actions,
	plugins: [VuexWebExtensions({persistentStates: ['foo', 'wallet', 'wallets', 'options', 'settings'] })]
})
