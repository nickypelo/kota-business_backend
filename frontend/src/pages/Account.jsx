import React, { useContext } from 'react';
import api from '../api/orders';
import { useState , useEffect} from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import AuthContext from '../context/AuthContext';


const Account = () => {
    const [history, setHistory] = useState([]);
    const [show, setShow] = useState(false);
    const [logOnto, setLogOnto] = useState(true);

    const {user, logOff} = useContext(AuthContext)

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
        {!localStorage.getItem('authTokens') ?
            (logOnto ?
                <Register useLogin={haveAccount}/>
            :
                <Login useRegister={haveAccount}/>
            )
            :

                <main className="account-container">
                    {/* account information */}
                    <section className='consumer-profile'>
                        <figure className="profile-picture">
                            <img src="" alt="" className="picture" />
                            <figcaption>
                                <p>Name and Surname</p>
                                <p>{user.username}</p>
                            </figcaption>
                        </figure>
                        <button onClick={logOff}>Log Off</button>
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
