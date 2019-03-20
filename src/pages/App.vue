<template>
	<div>
		<div class="hero has-text-centered">
			<p class="title" >Hello Wallet</p>
		</div>
		<section>
			<b-tabs expanded>
				<b-tab-item label="Pictures" icon="google-photos"></b-tab-item>
				<b-tab-item label="Music" icon="library-music"></b-tab-item>
			</b-tabs>
		</section>
		<section>
			<b-field horizontal label="Name">
				<b-input v-model="name" />
			</b-field>
			<b-field label="Address">
				<b-input v-model="address" />
			</b-field>
			<b-field horizontal label="Quantity">
				<b-input v-model="quantity" />
			</b-field>
			<b-field label="Server">
				<b-input v-model="server" />
			</b-field>
		</section>
		<section>
			<b-dropdown aria-role="list">
				<button class="button is-primary" slot="trigger">
					<span>Click me!</span>
					<b-icon icon="menu-down"></b-icon>
				</button>
	
				<b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
			</b-dropdown>
	
			<b-dropdown hoverable aria-role="list">
				<button class="button is-info" slot="trigger">
					<span>Hover me!</span>
					<b-icon icon="menu-down"></b-icon>
				</button>
	
				<b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
			</b-dropdown>
	
			<b-dropdown disabled aria-role="list">
				<button class="button" slot="trigger">
					<span>Disabled</span>
					<b-icon icon="menu-down"></b-icon>
				</button>
	
				<b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
			</b-dropdown>
	
			<b-dropdown aria-role="list">
				<p
					class="tag is-success"
					slot="trigger"
					role="button">
					Custom trigger
				</p>
	
				<b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
				<b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
			</b-dropdown>
		</section>
		<section>
			<button class="button block" @click="isActive = !isActive">Toggle</button>
			<b-message title="Default" :active.sync="isActive">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
			</b-message>
		</section>
		<section>
			<div class="block">
				<b-icon
					icon="account"
					size="is-small">
				</b-icon>
				<b-icon
					icon="home"
					size="is-small">
				</b-icon>
				<b-icon
					icon="view-dashboard"
					size="is-small">
				</b-icon>
			</div>
	
			<div class="block">
				<b-icon icon="account"></b-icon>
				<b-icon icon="home"></b-icon>
				<b-icon icon="view-dashboard"></b-icon>
			</div>
	
			<div class="block">
				<b-icon
					icon="account"
					size="is-medium">
				</b-icon>
				<b-icon
					icon="home"
					size="is-medium">
				</b-icon>
				<b-icon
					icon="view-dashboard"
					size="is-medium">
				</b-icon>
			</div>
	
			<div class="block">
				<b-icon
					icon="account"
					size="is-large"
					type="is-success">
				</b-icon>
				<b-icon
					icon="home"
					size="is-large"
					type="is-info">
				</b-icon>
				<b-icon
					icon="view-dashboard"
					size="is-large"
					type="is-primary">
				</b-icon>
			</div>
	
			<button class="button is-dark">
				<b-icon icon="check"></b-icon>
				<span>Finish</span>
			</button>
	
			<button class="button is-warning">
				<b-icon icon="check"></b-icon>
				<span>Finish</span>
			</button>
		</section>
		<section>
		    <b-notification>
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-notification>

		    <b-notification type="is-info">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-notification>

		    <b-notification type="is-success">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-notification>

		    <b-notification type="is-warning">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-notification>

		    <b-notification type="is-danger">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-notification>
		</section>
		<section>
		    <b-message title="Default">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-message>
	
		    <b-message title="Danger" type="is-danger">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-message>
	
		    <b-message title="Success" type="is-success">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-message>
	
		    <b-message title="Info" type="is-info">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-message>
	
		    <b-message title="Warning" type="is-warning">
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		    </b-message>
		</section>
	</div>
</template>

<script>
	import { mapFields } from 'vuex-map-fields';
	export default {
		data () {
			return { isActive: false }
		},
		computed: {
			...mapFields([
				'foo',
				'forms.name',
				'forms.address',
				'forms.quantity',
				'forms.server'
			])
		}
	}
</script>

<style lang="scss" scoped>
p {
	font-size: 20px;
}
</style>
