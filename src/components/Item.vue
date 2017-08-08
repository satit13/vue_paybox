<template>
	<div class="item_container">
		<div class="container">
			<h1>{{ title }}</h1>
			<button class="bt_menu" v-for="items in item_list">
				<img :src="items.img">
				<h1>{{ items.name }}</h1>
			</button>
		</div>	
	</div>
</template>

<script src="../js/page_item.js"></script>
