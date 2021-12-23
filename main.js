const search_btn = document.querySelector("#search-btn");
const search_bar = document.querySelector(".search-bar-container");
 search_btn.addEventListener('click', ()=>{
 	search_btn.classList.toggle('fa-times');
 	search_bar.classList.toggle('active');
 });

 const close_btn = document.querySelector('#form-close');
 const formlogin = document.querySelector('.login-form-container');
 const loginbtn = document.querySelector('#login-btn')
 close_btn.addEventListener('click',()=>{
 	formlogin.classList.remove('active');
 })
 loginbtn.addEventListener('click',()=>{
 	formlogin.classList.toggle('active');
 });

const menu_bar =document.querySelector('#menu-bar');
const nav_list = document.querySelector('.navbar');
menu_bar.addEventListener('click',()=>{
	menu_bar.classList.toggle('fa-times');
	nav_list.classList.toggle('active');
});

const videobtn = document.querySelectorAll('.video-btn');
const bg = document.querySelector("#video-slider")
videobtn.forEach(btn =>{
	btn.addEventListener('click',()=>{
		document.querySelector('.control .active').classList.remove('active');
		btn.classList.toggle('active');
		let src = btn.getAttribute('data-src');
		bg.src = src;
	});
});