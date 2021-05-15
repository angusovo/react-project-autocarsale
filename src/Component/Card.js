import './Card.css';
import CardItem from './CardItem';
import React, {useState, useEffect} from 'react'
import db from "../firebase"

function Cards() {
  const [carlist, setCarlist] = useState([]) 

  useEffect(() => {
      db.collection("autocar").doc("sellcar").collection("cars").onSnapshot(snapshot=>{
          setCarlist(snapshot.docs.map(doc=>({
            id:doc.id,
            carMake:doc.data().carMake,
            carModel:doc.data().carModel,
            seat:doc.data().seat,
            transmission:doc.data().transmission,
            mileage:doc.data().mileage,
            price:Number(doc.data().price),
            picUrl:doc.data().picUrl,
            carVeriant:doc.data().carVeriant,
            cc:doc.data().cc,
            owner:doc.data().owner,
            timestamp:doc.data().timestamp,
          })))
      }
          )        
  }, [])

  const featuredCar = carlist.slice(0,4).map(item=>(
    <CardItem 
        key={item.id}
        id={item.id} 
        src={item.picUrl} 
        carMake={item.carMake} 
        carModel={item.carModel} 
        seat={item.seat} 
        price={item.price} 
        transmission={item.transmission} 
        mileage={item.mileage} 
        owner={item.owner} 
        cc={item.cc} 
        carVeriant={item.carVeriant}
        date={item.timestamp}/>
))

  return (

    <div className='cards'>
      <div className="cards_header">
        <h1 className="header_text">FEATURED CAR</h1>
        <h3>look for some cool cars?</h3>
      </div>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {featuredCar}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
