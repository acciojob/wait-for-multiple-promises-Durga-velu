//your JS code here. If required.



let promise1=new Promise((resolve,reject){

	setTimeOut(()=>{
		
		resolve(Promise 1, 2)
		
	},2000)
})


let promise2=new Promise((resolve,reject){

	setTimeOut(()=>{
		
		resolve(Promise 2, 1)
		
	},2000)
})



let promise3=new Promise((resolve,reject){

	setTimeOut(()=>{
		
		resolve(Promise 3, 3)
		
	},2000)
})

let output= document.getElementById("output")
Promise.all([promise1,promise1,promise3]).then((text, seconds) =>{
	let row=document.createElement("tr");
	output.appendChild(row);
	let col1=document.createElement("td");
	row.appendChild(col1)
	col1.textContent=text;
	let col2=document.createElement("td");
	col2.textContent=seconds
	row.appendChild(col2);
})