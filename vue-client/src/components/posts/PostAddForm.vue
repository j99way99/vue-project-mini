<template>
	<div class="contents">
		<PageHeader>Create Post</PageHeader>
		<div class="form-wrapper">
			<form @submit.prevent="submitForm" class="form">
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
					<p class="validation-text" :class="{ reverse: isContentTooLong }">
						<span v-if="isContentTooLong" class="warning"
							>Maximum Length is 50</span
						>
						<span>{{ contentsLength }} / 250</span>
					</p>
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
				{{ resultMessage }}
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.form textarea {
	margin-bottom: 0;
}
.form .validation-text {
	margin-bottom: 1rem;
	font-size: 1rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
}
.form .validation-text.reverse {
	flex-direction: row;
}
.btn {
	color: white;
}
.log {
	width: 420px;
}
</style>
