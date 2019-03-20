
import extension from 'extensionizer'
import store from './store'
import SWTCLIB from 'swtc-lib'
import ToolSet from 'swtc-toolset'
const toolset = new ToolSet()
toolset.promisifyAll(SWTCLIB)
const Wallet = SWTCLIB.Wallet
const Remote = SWTCLIB.Remote
const remote = new Remote(toolset.REMOTE)

const manifest = extension.runtime.getManifest()
console.log(manifest)

remote.connectAsync().then(server_info =>{
		console.log(server_info)
		alert('remote connected')
		remote.on('ledger_closed', (ledger) => {
			console.log(ledger)
			store.commit('UPDATE_FORMS', {quantity: Math.floor(Math.random() * 1000)})
		})
	}).catch(error => alert(error))

setTimeout(() => alert(`Hello ${store.getters.foo}!`), 2000)

setInterval(() => {
		store.dispatch('setFoo', `hello # ${Wallet.generate().address}`)
		console.log(`Hello ${store.getters.foo}!`)
	}, 20000)

// extension.browserAction.onClicked.addListener(() => console.log('browser action clicked'))
// extension.messages.onMessage.addListener((msg) => console.log(msg))
