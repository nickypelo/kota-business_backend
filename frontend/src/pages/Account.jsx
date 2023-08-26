import React from 'react';
import api from '../api/orders';
import { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';


const Account = () => {
    const [history, setHistory] = useState([]);
    const [show, setShow] = useState(false);
    const [logOnto, setLogOnto] = useState(true);
    const items = [];


    const listOfOrders = (list) =>{
        
    }

    const haveAccount = () => {
        console.log('CHanging')
        setLogOnto(!logOnto);
    }

    const flip = () =>{
        setShow(!show);
    }


     return (
        //content of the whole page
        <>
        {!show ?
            (logOnto ?
                <Register useLogin={haveAccount}/>
            :
                <Login access={flip}/>
            )
            :

                <main className="account-container">
                    {/* account information */}
                    <section className='consumer-profile'>
                        <figure className="profile-picture">
                            <img src="" alt="" className="picture" />
                            <figcaption>
                                <p>Name and Surname</p>
                                <p>Username</p>
                            </figcaption>
                        </figure>
                    </section>


                    <section className="purchase-history">
                        <h4>Purchase history</h4>
                        {history.map((time) => (
                            <article className="time-of-purchase">
                                <p className="timeStamp">{time.order_date}</p>

                                {time.order_date.map((purchase) => (
                                    <div className="purchase">
                                        <p>{purchase.order_name}</p>
                                        <p>{purchase.order_price}</p>
                                        <p>{purchase.order_date}</p>
                                        <p>{purchase.order_image}</p>
                                    </div>

                                ))};
                                
                            </article>
                            
                        ))};

                    </section>

                </main>
        }
        </>
        
  )
}

export default Account
