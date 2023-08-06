const usersList= [
    {
        id:1,
        name:"Hitesh",
        age:25,
        profession: "developer"
    },
    {
        id:2,
        name:"Neeraj",
        age:25,
        profession: "admin"
    },
    {
        id:3,
        name:"Raj",
        age:22,
        profession: "developer"
    },
    {
        id:1,
        name:"sam",
        age:21,
        profession: "admin"
    },
]

const filterButton= document.getElementById("filter");

const select=document.getElementsByTagName("select")[0];

const container= document.getElementById("cards-container");

const form = document.getElementById("user-form");
function filterUsers(){
    const selectedvalue = select.value;
    if(!selectedvalue){
        alert(" Please Select one option");
        return;
    } 

    container.innerHTML = '';

   const result= usersList.filter((user) => {
        if(user.profession===selectedvalue){
            return true;
        }
        else{
            return false;
        }
    })

    const createParaWithInnerText = (lebel, value) => {
        const p= document.createElement("p");
        p.innerText= `${lebel} : ${value}`
        return p;
    }

    result.forEach((user, index ) => {
        const div= document.createElement("div");
        div.className= "user-card";
        const p1= document.createElement("p");
        p1.innerText= (index+1)+".";
        let paraList=[];

        for(let i in user){
            if(i !== "id")
            paraList.push(createParaWithInnerText(i, user[i]))
        }

        paraList.forEach((p) => {
div.appendChild(p);
        })

        container.appendChild(div);
    })

}

function addNewUser(e){
    e.preventDefault();
    const user = {
        name: e.target["name"].value,
        age: e.target["age"].value,
        profession: e.target["profession"].value

    }
    usersList.push(user);
}

filterButton.addEventListener("click", filterUsers)

form.addEventListener("submit", addNewUser);
