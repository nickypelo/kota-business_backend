import React from 'react';
import { useState, useEffect } from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import api from '../api/user'
import axios from 'axios';


const Account = () => {
    // const [history, setHistory] = useState([]);
    const [show, setShow] = useState(true);
    const [logOnto, setLogOnto] = useState(true);
    const [local, setLocal] = useState(localStorage.getItem('allowed'));
    const [user, setUser] = useState('')
    const [photo, setPhoto] = useState(null);
    const [menu, setMenuItems] = useState()

    const haveAccount = () => {
        console.log('Changing')
        setLogOnto(!logOnto);
    }

    const flip = () =>{
        setShow(!show);
    }

    const history = [
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
    

    function countItems(arr) {
        const itemCounts = {};
        let key = 1;
        for (const item of arr) {
          if (itemCounts[item.date]) {
            itemCounts[item.date].push(
                {
                    id: key,
                    order_name: item.name,
                    order_price: item.price,
                    order_image: item.img,
                }
            );
          } else {
            itemCounts[item.date] = [
                {
                    id: key,
                    order_name: item.name,
                    order_price: item.price,
                    order_image: item.img,
                }
            ]; 
          }
          key++;
        }
      
        // Convert the object to an array of { item, count } pairs
        const result = [];
        for (const item in itemCounts) {
          result.push({ item, repeatedItems: itemCounts[item] });
        }
      
        return result;
    }

    const logOff = () =>{
    setLocal(localStorage.removeItem('allowed'));
    }

    const upload = async(e) =>{
        e.preventDefault();
        console.log('I got the picture');
        const send = await fetch('http://localhost:8000/api/images/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'profile_picture': e.target.image.files[0],
                'image_user': 3
            
            })
        })

        if(send.status===200){
            console.log('we done did it')
        }
        else{
            console.log('ai, its not for you')
        }

    }

    useEffect(() =>{
        const fetchMenu = async () => {
            try{
                const response = await api.get('/');
                // setMenuItems(response.data);
                setMenuItems((response.data)[0].profile_picture)

            } catch(err){
                console.log(err.message)
            }
        }
        fetchMenu();
    }, [])

    const save = () =>{
        const formData = new FormData();



        formData.append('image_user', photo);

        console.log('working on it')

        axios.post('http://localhost:8000/api/images/', formData)
    }


     return (
        //content of the whole page
        <>
        {!local && show?
            (logOnto ?
                <Register useLogin={haveAccount}/>
            :
                <Login useRegister={haveAccount}
                        setL={setLocal}
                        flip={flip}
                        us={setUser}
                />
            )
            :
                <main className="account-container">
                    <h2>Profile for {user}</h2>
                    {/* account information */}
                    <section className='consumer-profile'>
                        <figure className="profile-picture">
                            <img src='' alt="" className="picture" width='220' height='250'/>
                            <figcaption>
                                <div>
                                    <input type='file'
                                                onChange={(e)=>setPhoto(e.target.files[0])}
                                            />
                                    <button onClick={save}>upload</button>
                                </div>
                                {/* <p>{user.first_name} and {user.last_name}</p> */}
                            </figcaption>
                        </figure>
                        <button onClick={logOff}>Log Off</button>
                    </section>
                        


                    <section className="purchase-history">
                        <h3>Purchase history</h3>
                        {countItems(history).map((time) => (
                            <article className="time-of-purchase" key={time.item}>
                                <h4 className="timeStamp">{time.item}</h4>

                                {time.repeatedItems.map((purchase) => (
                                    <div className="purchase" key={purchase.id}>
                                        <p>{purchase.order_name}</p>
                                        <p>{purchase.order_price}</p>
                                        {/* <p>{purchase.order_image}</p> */}
                                        <figure className="order-image"><img src={purchase.order_image} alt=""  /></figure>
                                    </div>

                                ))}
                                
                            </article> 
                        ))} 
                    </section>
                </main>
        }
        </>
        
  )
}

export default Account
