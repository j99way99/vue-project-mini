<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<PageHeader>Login</PageHeader>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">ID</label>
					<input type="text" id="username" v-model="username" />
				</div>
				<div>
					<label for="password">PW</label>
					<input type="password" id="password" v-model="password" />
				</div>
				<button class="btn">login</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.btn {
	color: white;
}
</style>
