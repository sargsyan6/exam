let data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"], 
    ["this","is","a","long","sentence"]
  ]
  
  function groupeWords(array) {
    return array.map(function (item) {
        let a = ""
        item.forEach(element => {
            a= a + ` ${element}`
        });
        return a
    })
  }

  console.log(groupeWords(data));


  let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDups(arr) {
	let unique = []
    for(i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===i){
            unique.push(arr[i])
        }
    }
    return unique
};
console.log(removeDups(dupes));


function stringReverce(str) {
    let arr = str.split(".")
    let arrRev=arr.reverse()
    return arrRev.join(".")
}

console.log(stringReverce("i.like.this.program.very.much"));


function Calculator() {
    return function (a,b,simbol) {
        if(simbol==="+"){
            return a+b
        }
        if(simbol==="-"){
            return a-b
        }
        if(simbol==="*"){
            return a*b
        }
        if(simbol==="/"){
            return a/b
        }
    }
    
}

let calc = new Calculator();
console.log(calc(1,2,"-"));


let arr = [
    {name: 'Alice', job: 'Data Analyst', country: 'AU'},
    {name: 'Bob', job: 'Pilot', country: 'US'},
    {name: 'Lewis', job: 'Pilot', country: 'US'},
    {name: 'Karen', job: 'Software Eng', country: 'CA'},
    {name: 'Jona', job: 'Painter', country: 'CA'},
    {name: 'Jeremy', job: 'Artist', country: 'SP'},
  ];
  
  function groupe(arr, prop) {
      let newObj={}
      arr.forEach(function (item) {
        if(!(Object.keys(newObj).includes(prop))){
            newObj[prop]=[item]
        }
        else{
            newObj.prop=newObj.prop.push(item)
        }
      })
  } 

  console.log(groupe(arr,"cauntry"));
  
