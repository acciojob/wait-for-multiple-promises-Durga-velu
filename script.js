//your JS code here. If required.



let promise1=new Promise((resolve,reject){

	setTimeout(()=>{
		
		resolve(2)
		
	},Math.random() * 2000+1000)
})


let promise2=new Promise((resolve,reject){

	setTimeout(()=>{
		
		resolve(1)
		
	},Math.random() * 2000+1000)
})



let promise3=new Promise((resolve,reject){

	setTimeout(()=>{
		
		resolve(3)
		
	},Math.random() * 2000+1000)
})

let output= document.querySelector("#output")

let loadingRow=document.createElement("tr");
let loadingCol=document.createElement("td");

loadingCol.colSpan=2;
loadingCol.textContent="Loading..."
loadingRow.appendChild(loadingCol)
output.appendChild(loadingRow);

Promise.all([promise1,promise2,promise3]).then((results) =>{
	
	output.removeChild(loadingRow);

let totalTime=Math.max(...results)

	    results.forEach((time, index) => {
let row=document.createElement("tr");
let col1=document.createElement("td");

			col1.textContent=`Promise ${index+1}`;
			row.appendChild(col1)
			let col2=document.createElement("td");
	col2.textContent=time.toFixed(3);
			row.appendChild(col2)
			output.appendChild(row);
			)}
	
	
	 let totalRow = document.createElement("tr");
    let totalCol1 = document.createElement("td");
    totalCol1.textContent = "Total";
    totalRow.appendChild(totalCol1);
	
	  let totalCol2 = document.createElement("td");
	 totalCol2.textContent = totalTime.toFixed(3)
	    totalRow.appendChild(totalCol2);
	  output.appendChild(totalRow);
})