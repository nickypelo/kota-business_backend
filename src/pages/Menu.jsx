import React from "react";
import { useState, useEffect } from "react"
import { FaPlus, FaMinus } from "react-icons/fa";

class Counting{
    constructor(value){
        this.value = value;
    }
}

const Menu = ({addedToCart, removedFromCart}) => {

    const API_URL = 'http://localhost:5500/menu';

   
    const menuItems = [
        {
            "id": 1,
            "name": "CHIP ROLL KOTA",
            "price": 40,
            "ingredients": "Deep fried chips with our special seasoning topped off with mango atchaar on toasted buns with our secret assorted sauces.",
            "img": "/chip_roll.jpg"
        },
        {
            "id": 2,
            "name": "THE LOVIE WAM KOTA",
            "price": 70,
            "ingredients": "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
            "img": "/lovie_wam.jpg"
        },
        {
            "id": 3,
            "name": "THE BAE KOTA",
            "price": 90,
            "ingredients": "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
            "img": "/bae.jpg"
        },
        {
            "id": 4,
            "name": "VEGGIE MONATE KOTA",
            "price": 105,
            "ingredients": "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
            "img": "/veggie_monate.jpg"
        }
    ]

    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);

    const counting1 = new Counting(count1);
    const counting2 = new Counting(count2);
    const counting3 = new Counting(count3);
    const counting4 = new Counting(count4);

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

    const counter = (selectedKota, num) =>{

        if(returnValue(selectedKota) + num >= 0){
            if(selectedKota === 1){
                count1+=num;
                setCount1(count1)
                counting1.value+=count1;
            }else if(selectedKota === 2){
                count2+=num;
                setCount2(count2)
                counting2.value+=count2;
            }else if(selectedKota === 3){
                count3+=num;
                setCount3(count3)
                counting3.value+=count3;
            }else if(selectedKota === 4){
                count4+=num;
                setCount4(count4)
                counting4.value+=count4;
            }
        }

        num>0 ? addedToCart(selectedKota) : removedFromCart(selectedKota);
        
    }

    // const [menuItems, setMenuItems] = useState([]);

    // useEffect(() =>{

    //     const fetchItems = async () =>{
    //         try {
    //             const response = await fetch(API_URL);
    //             const menuList = await response.json();
    //             console.log(menuList)
    //             setMenuItems(menuList);
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     }
    //     fetchItems();
    // }, [])

    return(
        <section className="menu">
            <h1>Menu</h1>
            <div className="menu-list">
                {menuItems.map((menu)=>(
                    <article className="menu-option" key={menu.id}>
                        <figure className="kota-img" style={{backgroundImage: `url(${menu.img})`}}></figure>
                        <div className="kota-details">
                            <div className="name-price">
                                <p>{menu.name}</p>
                                <p>R{menu.price}</p>
                            </div>
                            <p className="ingredients">{menu.ingredients}</p>
                            <div className="addOn-cart">
                                <FaMinus className= "addOn-icon"  onClick={() => counter(menu.id,-1)}/>
                                <p>{returnValue(menu.id)}</p>
                                <FaPlus className= "addOn-icon"  onClick={() => counter(menu.id, 1)}/>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
        </section>
    )
}

export default Menu;