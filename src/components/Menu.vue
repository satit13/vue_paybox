<template>
  <div class="menu">
	<div class="container">
		<h1>{{ title }}</h1>
		<button class="bt_menu" v-for="menus in menu_list">
				<img :src="menus.img">
				<h1>{{ menus.name }}</h1>
		</button>
		
		<p>
			<span @click="getApi(1)">ไทย</span>&nbsp;&nbsp;
			<span @click="getApi(2)">Eng</span>&nbsp;&nbsp;
			<span @click="getApi(3)">Chiness</span>
		</p>
	</div>
  </div>
</template>

<script src="../js/menu.js"></script>
