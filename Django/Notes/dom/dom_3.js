var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')

one.addEventListener('mouseover',function(){
	one.textContent = 'Mouse Correctly Over';
	one.style.color = 'red';
})
one.addEventListener('mouseout',function(){
	one.textContent = 'HOVER ME';
	one.style.color = 'black';
})


two.addEventListener('click', function(){
	two.textContent = 'Clicked On';
	two.style.color = 'blue';
})

three.addEventListener('dblclick', function(){
	three.textContent = 'Double Clicked On';
	three.style.color = 'green';
})