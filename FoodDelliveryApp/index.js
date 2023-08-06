
const menuContainer= document.querySelector(".menu-container");

  async function getMenu(){

    const endpoint= "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
    let result;

    try{
    let response = await fetch(endpoint);
     result= await response.json();
    // console.log(result)
    for(let i=0; i<result.length; i++){
        const menuElement= result[i];
        let menu= document.createElement("div");
        menu.className="menu";
        menu.innerHTML=`
        <p class="id">id: ${menuElement.id}</p>
        <p class="name">name: ${menuElement.name} </p>
        <p class="price">price: ${menuElement.price}</p>
        <img src=${menuElement.imgSrc} alt="" width="200px">
        `;
        menuContainer.append(menu);
    }
    } catch(error){
        alert("something went wrong", error);
    }

  }

  // TakeOrder() function
function TakeOrder() {
    const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger', 'Bacon Burger', 'Mushroom Burger'];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const selectedBurgers = getRandomBurgers(burgers, 3);
        const order = {
          burgers: selectedBurgers
        };
        resolve(order);
      }, 2500);
    });
  }

  // orderPrep() function
function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // payOrder() function
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }

  // thankyouFnc() function
function thankyouFnc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert('Thank you for eating with us today!');
        resolve();
      }, 0); // No delay needed, as it's the last function in the chain
    });
  }
  
  // Helper function to get random burgers
  function getRandomBurgers(burgers, count) {
    const selectedBurgers = [];
    const availableBurgers = [...burgers];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * availableBurgers.length);
        const randomBurger = availableBurgers[randomIndex];
        selectedBurgers.push(randomBurger);
        availableBurgers.splice(randomIndex, 1);
      }
    
      return selectedBurgers;
    }
    
    // Main function to handle promises
    async function restaurantScript() {
      try {
        await getMenu();
        const order = await TakeOrder();
        console.log('Order:', order);
        const prepStatus = await orderPrep();
        console.log('Order Preparation Status:', prepStatus);
        const paymentStatus = await payOrder();
        console.log('Payment Status:', paymentStatus);
        await thankyouFnc();
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    // Run the script
    restaurantScript();
    
