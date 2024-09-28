function increment(){
	let temp = document.getElementById("counter")
	alert(parseInt(temp.innerHTML))
	temp.innerHTML = parseInt(temp.innerHTML) + parseInt(1)
    
}
