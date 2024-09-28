function increment(){
	let temp = document.getElementById("counter")
	temp.innerHTML = parseInt(temp.innerHTML) + parseInt(1)
    alert(temp.innerHTML)
}
