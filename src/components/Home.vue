<template>
	<div>
		<h1>Trade or View your portfolio</h1>
		<h6>You may save and load your data</h6>
		<h6>Click on 'end day' to begin a new day</h6>
		<hr>
		<p>Your funds are {{ funds | currency }}</p>
	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
		name: "home"
	}
</script>

<style scoped>

</style>