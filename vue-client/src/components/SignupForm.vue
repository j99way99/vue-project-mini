<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<PageHeader>Sign Up</PageHeader>
			<form @submit.prevent="registerUser" class="form">
				<div>
					<label for="username">ID</label>
					<input
						type="text"
						id="username"
						v-model="username"
						:class="usernameValidClass"
					/>
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">PW</label>
					<input
						type="password"
						id="password"
						v-model="password"
						:class="passwordValidClass"
					/>
					<p class="validation-text">
						<span class="warning" v-if="!isPasswordValid">
							Password must be over 8 letters
						</span>
					</p>
				</div>
				<div>
					<label for="nickname">Nickname</label>
					<input
						type="text"
						id="nickname"
						v-model="nickname"
						:class="nicknameValidClass"
					/>
				</div>
				<button
					type="submit"
					class="btn"
					:class="isButtonDisabled"
					:disabled="isButtonDisabled"
				>
					Create
				</button>
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
.form {
	width: 460px;
	height: 100%;
}
.form .validation-text {
	margin-top: -0.5rem;
	margin-bottom: 0.5rem;
	font-size: 1rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
}
.btn {
	color: white;
}
.log {
	width: 460px;
}
</style>
