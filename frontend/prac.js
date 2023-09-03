const menuItems = [
    {
        id: 1,
        name: "CHIP ROLL KOTA",
        price: "R40",
        ingredients: "Deep fried chips with our special seasoning topped off with mango atchaar on toasted buns with our secret assorted sauces.",
        img: "/chip_roll.jpg",
        date: '4 May 2023'
    },
    {
        id: 2,
        name: "THE LOVIE WAM KOTA",
        price: "R70",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
        img: "/lovie_wam.jpg",
        date: '5 May 2023',
    },
    {
        id: 3,
        name: "THE BAE KOTA",
        price: "R90",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
        img: "/bae.jpg",
        date: '6 May 2023'
    },
    {
        id: 4,
        name: "VEGGIE MONATE KOTA",
        price: "R105",
        ingredients: "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
        img: "/veggie_monate.jpg",
        date: '4 May 2023'
    },
    {
        id: 4,
        name: "VEGGIE MONATE KOTA",
        price: "R105",
        ingredients: "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
        img: "/veggie_monate.jpg",
        date: '4 May 2023'
    },
    {
        id: 2,
        name: "VEGGIE MONATE KOTA",
        price: "R105",
        ingredients: "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
        img: "/veggie_monate.jpg",
        date: '4 June 2023'
    }
]

const getIds = (listOfOrders) =>{
    const list = listOfOrders.map((item)=> (item.date !== undefined ?  item.date : undefined))
    return list
} 

const uniqueIds = (listOfOrders) =>{
    return [...new Set(listOfOrders)]
}

function countItms(arr) {
    const itemCounts = {};
    const orderList = [];
    
    // Loop through the array and count occurrences of each item
    for (const date of arr) {
      if (itemCounts[date]) {
        itemCounts[date]++;
        orderList.push(date);
      } else {
        itemCounts[date] = 1;

      }
    }
  
    // Convert the object to an array of { item, count } pairs
    const result = [];
    for (const date in itemCounts) {
      result.push({ date, orders:  orderList});
    }
  
    return result;
  }

  function countItem(arr) {
    const itemCounts = {};
    
    // Loop through the array and count occurrences of each item
    for (const date of arr) {
      if (itemCounts[date]) {
        itemCounts[date]++;
      } else {
        itemCounts[date] = 1;
      }
    }
  
    // Convert the object to an array of { item, count } pairs
    const result = [];
    for (const date in itemCounts) {
      result.push({ date, count: itemCounts[date] });
    }
  
    return result;
  }

  function countItems(arr) {
    const itemCounts = {};
  
    for (const item of arr) {
      if (itemCounts[item.date]) {
        itemCounts[item.date].push(
            item.name
        );
      } else {
        itemCounts[item.date] = [
            item.name
        ];
      }
    }
  
    // Convert the object to an array of { item, count } pairs
    const result = [];
    for (const item in itemCounts) {
      result.push({ item, repeatedItems: itemCounts[item] });
    }
  
    return result;
  }

let counting1 = 0;
let counting2 = 0;
let counting3 = 0;
let counting4 = 0;

  const add = (values, item) =>{
    if(values[item].id === 1){
        // setCount1(counting1.value+=1)
        counting1+=1;
    }
    else if(values[item].id === 2){
        // setCount2(counting2.value+=1)
        counting2+=1;
    }
    else if(values[item].id === 3){
        // setCount3(counting1.value+=1)
        counting3+=1;
    }
    else if(values[item].id === 4){
        // setCount4(counting1.value+=1)
        counting4+=1;
    }
}

  let answer = []; 

  const countCartOrders = (orders) =>{
    let item = 0;
    let count = orders.length
    let ids = uniqueIds(getIds(orders));

    while(count > 0){    
        if(ids.includes(orders[item].date)){
            let firstOrder = orders[item].date;
            let firstOrderIndex = ids.indexOf(firstOrder);
            ids.splice(firstOrderIndex,1)

            answer.push(orders[item])
            add(orders, item);
            item++;
            count--;
            continue;
        }

        add(orders, item);
        item++;
        count--;
    }
    return answer;
}



// console.log(getIds(menuItems))
console.log(uniqueIds(getIds(menuItems)))

const myArray = getIds(menuItems) ;
const countedItems = countItems(menuItems);
console.log(countedItems);
// console.log(countCartOrders(menuItems))
// console.log(counting1)
// console.log(counting2)
// console.log(counting3)
// console.log(counting4)