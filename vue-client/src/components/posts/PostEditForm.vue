<template>
	<div class="contents">
		<PageHeader>Edit Post</PageHeader>
		<div class="form-wrapper">
			<form @submit.prevent="editForm" class="form">
				<div>
					<label for="title">Title</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents</label>
					<textarea
						name="contents"
						id="contents"
						cols="30"
						rows="5"
						v-model="contents"
					></textarea>
				</div>
				<button
					type="submit"
					class="btn"
					:class="isButtonDisabled"
					:disabled="isButtonDisabled"
				>
					Edit
				</button>
			</form>
			<p class="log">
				{{ resultMessage }}
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.btn {
	background-color: #fc5185;
	color: white;
}
.log {
	width: 420px;
}
</style>
