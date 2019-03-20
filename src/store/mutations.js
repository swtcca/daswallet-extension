import * as types from './mutation-types'

export default {
	[types.UPDATE_FOO] (state, payload) {
		state.foo = payload
	},
	[types.UPDATE_FORMS] (state, payload) {
		state.forms = Object.assign({}, state.forms, payload)
	},
	[types.CLEAR_FORMS] (state) {
		state.forms = Object.assign({})
	},
	[types.UPDATE_OPTIONS] (state, payload) {
		state.options = Object.assign({}, state.options, payload)
	},
	[types.CLEAR_OPTIONS] (state) {
		state.options = Object.assign({})
	},
	[types.UPDATE_SETTINGS] (state, payload) {
		state.settings = Object.assign({}, state.settings, payload)
	},
	[types.CLEAR_SETTINGS] (state) {
		state.settings = Object.assign({})
	},
	[types.UPDATE_WALLET] (state, payload) {
		state.wallet = Object.assign({}, state.wallet, payload)
	},
	[types.SET_WALLET] (state, payload) {
		state.wallet = Object.assign({}, payload)
	},
	[types.LOCK_WALLET] (state) {
		state.wallet = Object.assign({}, state.wallet, {locked: true})
	},
	[types.UNLOCK_WALLET] (state, payload) {
		state.wallet = Object.assign({}, state.wallet, {locked: false})
	},
	[types.ADD_TO_WALLETS] (state, payload) {
		state.wallets.push(payload)
	},
	[types.DELETE_FROM_WALLETS] (state, payload) {
		state.wallets.splice(state.wallets.indexOf(payload), 1)
	}
}
