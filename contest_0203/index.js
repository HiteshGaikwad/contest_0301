
let arr1;

async function fetchData(){
let response= fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);

response.then((data)=>{
    let info= data.json();
    info.then((finalData)=>{
        arr1=finalData;
        appendOntoWebpage(finalData);
    })

    info.catch((val)=>{
        alert("Something went wrong 1");
    })
})

response.catch((data)=>{
    alert("Something went wrong 2");
})

}

fetchData();

let list= document.getElementById("list");
let search= document.getElementById("search");
let button1= document.getElementById("two");
let button2= document.getElementById("three");


function appendOntoWebpage(arr){
    for(let i=0; i<arr.length; i++){
        let div= document.createElement("div");
        div.className="list-container";


        let profile= document.createElement("span");
        profile.className= "profile";
        let image= document.createElement("img");
        let address= arr[i].image;
        image.src=`${address}`;
        profile.append(image);

        let name= document.createElement("span");
        name.innerText=arr[i].name;
        profile.append(name);
        div.append(profile);

        let symbol= document.createElement("span");
        let sym= arr[i].symbol;
        symbol.innerText= sym.toUpperCase();
        div.append(symbol);

        // let id= document.createElement("span");
        // id.innerText= arr[i].id;
        // div.append(id);

        let current_price= document.createElement("span");
        current_price.innerText=arr[i].current_price;
        div.append(current_price);  

        let total_volume= document.createElement("span");
        total_volume.innerText= arr[i].total_volume;
        div.append(total_volume);

        let percentage= document.createElement("span");
        let per= arr[i].price_change_percentage_24h*100;
        per=per.toFixed(2)
        percentage.innerText= per+"%";
        if(per>1){
        percentage.className="per-green";
        } else{
            percentage.className="per-red";
        }
        div.append(percentage);

        let mkt_cap= document.createElement("span");
        mkt_cap.innerText="Mkt Cap: "+arr[i].market_cap;
        div.append(mkt_cap);

       list.append(div);
       let hr=document.createElement("hr");
       list.append(hr);
    }
}

function searchData(){
    list.innerText=' ';

    for(let i=0;i<arr1.length/2; i++){
         if(search.value===arr1[i].name || search.value===arr1[i].symbol){
            let div= document.createElement("div");
        div.className="list-container";


        let profile= document.createElement("span");
        profile.className= "profile";
        let image= document.createElement("img");
        let address= arr1[i].image;
        image.src=`${address}`;
        profile.append(image);

        let name= document.createElement("span");
        name.innerText=arr1[i].name;
        profile.append(name);
        div.append(profile);

        let symbol= document.createElement("span");
        let sym= arr1[i].symbol;
        symbol.innerText= sym.toUpperCase();
        div.append(symbol);

        // let id= document.createElement("span");
        // id.innerText= arr[i].id;
        // div.append(id);

        let current_price= document.createElement("span");
        current_price.innerText=arr1[i].current_price;
        div.append(current_price);  

        let total_volume= document.createElement("span");
        total_volume.innerText= arr1[i].total_volume;
        div.append(total_volume);

        let percentage= document.createElement("span");
        let per= arr1[i].price_change_percentage_24h*100;
        per=per.toFixed(2)
        percentage.innerText= per+"%";
        if(per>1){
        percentage.className="per-green";
        } else{
            percentage.className="per-red";
        }
        div.append(percentage);

        let mkt_cap= document.createElement("span");
        mkt_cap.innerText="Mkt Cap: "+arr1[i].market_cap;
        div.append(mkt_cap);

       list.append(div);
       let hr=document.createElement("hr");
       list.append(hr);
        }
     }
}

function comppareMktCap(a,b){
    return a.market_cap - b.market_cap;
}

function sortByMktCap(){
    list.innerText='';
    arr1.sort(comppareMktCap);
    for(let i=0; i<arr1.length; i++){
        let div= document.createElement("div");
        div.className="list-container";


        let profile= document.createElement("span");
        profile.className= "profile";
        let image= document.createElement("img");
        let address= arr1[i].image;
        image.src=`${address}`;
        profile.append(image);

        let name= document.createElement("span");
        name.innerText=arr1[i].name;
        profile.append(name);
        div.append(profile);

        let symbol= document.createElement("span");
        let sym= arr1[i].symbol;
        symbol.innerText= sym.toUpperCase();
        div.append(symbol);

        // let id= document.createElement("span");
        // id.innerText= arr[i].id;
        // div.append(id);

        let current_price= document.createElement("span");
        current_price.innerText=arr1[i].current_price;
        div.append(current_price);  

        let total_volume= document.createElement("span");
        total_volume.innerText= arr1[i].total_volume;
        div.append(total_volume);

        let percentage= document.createElement("span");
        let per= arr1[i].price_change_percentage_24h*100;
        per=per.toFixed(2)
        percentage.innerText= per+"%";
        if(per>1){
        percentage.className="per-green";
        } else{
            percentage.className="per-red";
        }
        div.append(percentage);

        let mkt_cap= document.createElement("span");
        mkt_cap.innerText="Mkt Cap: "+arr1[i].market_cap;
        div.append(mkt_cap);

       list.append(div);
       let hr=document.createElement("hr");
       list.append(hr);
}
}

function compareByper(a,b){
return a.price_change_percentage_24h - b.price_change_percentage_24h;
}
function sortByPercentage(){
    list.innerText='';
    arr1.sort(compareByper);
    for(let i=0; i<arr1.length; i++){
        let div= document.createElement("div");
        div.className="list-container";


        let profile= document.createElement("span");
        profile.className= "profile";
        let image= document.createElement("img");
        let address= arr1[i].image;
        image.src=`${address}`;
        profile.append(image);

        let name= document.createElement("span");
        name.innerText=arr1[i].name;
        profile.append(name);
        div.append(profile);

        let symbol= document.createElement("span");
        let sym= arr1[i].symbol;
        symbol.innerText= sym.toUpperCase();
        div.append(symbol);

        // let id= document.createElement("span");
        // id.innerText= arr[i].id;
        // div.append(id);

        let current_price= document.createElement("span");
        current_price.innerText=arr1[i].current_price;
        div.append(current_price);  

        let total_volume= document.createElement("span");
        total_volume.innerText= arr1[i].total_volume;
        div.append(total_volume);

        let percentage= document.createElement("span");
        let per= arr1[i].price_change_percentage_24h*100;
        per=per.toFixed(2)
        percentage.innerText= per+"%";
        if(per>1){
        percentage.className="per-green";
        } else{
            percentage.className="per-red";
        }
        div.append(percentage);

        let mkt_cap= document.createElement("span");
        mkt_cap.innerText="Mkt Cap: "+arr1[i].market_cap;
        div.append(mkt_cap);

       list.append(div);
       let hr=document.createElement("hr");
       list.append(hr);
}
}

search.addEventListener("change",searchData);

button1.addEventListener("click",sortByMktCap);

button2.addEventListener('click',sortByPercentage);


