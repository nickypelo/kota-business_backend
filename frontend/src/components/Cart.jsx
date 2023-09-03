import React from "react";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import '../styles/components.css';

class Counting{
    constructor(value){
        this.value = value;
    }
}
const Cart = ({close, orders }) => {
    //Array of none repeated orders
    let answer = []; 


    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);

    const counting1 = new Counting(count1);
    const counting2 = new Counting(count2);
    const counting3 = new Counting(count3);
    const counting4 = new Counting(count4);
    
    /**
     * @param: unique key of unique orders
     * @return: number of unique orders added to cart
    */
    const returnValue = (selectedKota) =>{
        if(selectedKota===1){
            return counting1.value;
        }else if(selectedKota===2){
            return counting2.value
        }else if(selectedKota===3){
            return counting3.value
        }else if(selectedKota===4){
            return counting4.value
        }
    }
    
    /**
     * 
     * @param {*} listOfOrders 
     * @returns all the ids of the orders
     */
    const getIds = (listOfOrders) =>{
        const list = listOfOrders.map((item)=> (item.id !== undefined ?  item.id : undefined))
        return list
    } 
      
    
    /**
     * Ensures that the cart does not have duplicate items
     * @param {*} listOfOrders 
     * @returns new List of unique keys
     */
    const uniqueIds = (listOfOrders) =>{
        return [...new Set(listOfOrders)]
    }


    /**
     * Increments the counter.
     * @param {*} values 
     * @param {*} item
     */
    const add = (values, item) =>{
        if(values[item].id === 1){
            // setCount1(counting1.value+=1)
            counting1.value+=1;
        }
        else if(values[item].id === 2){
            // setCount2(counting2.value+=1)
            counting2.value+=1;
        }
        else if(values[item].id === 3){
            // setCount3(counting1.value+=1)
            counting3.value+=1;
        }
        else if(values[item].id === 4){
            // setCount4(counting1.value+=1)
            counting4.value+=1;
        }
    }

    /**
     * function that compiles all the functions
     * to add the appropriate items in answer array
     * to add the necessary counts
     * @param {*} orders 
     * @returns answer = unique list
     */
    const countCartOrders = (orders) =>{
        let item = 0;
        let count = orders.length
        let ids = uniqueIds(getIds(orders));

        while(count > 0){    
            if(ids.includes(orders[item].id)){
                let firstOrder = orders[item].id;
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

    
    return(
        <article className="orders-placed">
            <section className='cart-heading'>
                <h4>Cart </h4>
                <FaWindowClose className="close-cart" onClick={close} />
            </section>
            {(orders).length<1 ? 
                <p className="empty-order">Empty</p> 
                :
                countCartOrders(orders).map((order) => (
                    <section className="orders" key={order.id}>
                        <div className="order-details">
                            <p>{`${order.name} - ${order.price}`}</p>
                        </div>
                        <figure className="order-image">
                            <img src={order.img} alt=""  />
                            <figcaption >x{returnValue(order.id)}</figcaption>
                        </figure>
                    </section> 
    
                ))    
            }
        </article>
    )
}

export default Cart;