import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function CardItem({
  id, 
  path, 
  label, 
  src, 
  carMake, 
  carModel, 
  seat, 
  price, 
  transmission, 
  mileage,
  cc,
  owner,
  carVeriant, 
  date }) 
  
  {
    const history = useHistory()

    const selectCar=()=>{
      history.push(`/cars/${id}`)
    }
  return (
    <>
      <li className='cards__item' onClick={selectCar}>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img'
              alt='car photo'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <div className='cards__item__text'>
              <h5>{carMake}</h5>
              <h3>{carModel} {carVeriant}</h3>
            </div>

            <div className="cards__item_detail">
              <span>Seat: {seat}</span>
              <span>transmission: {transmission}</span>
              <span>mileage: {mileage} km</span>
              <span>Engine Capacity: {cc} c.c.</span>
              <span>Previous Owner: {owner}</span>
              <span className="cards__item_date">{new Date(date?.toDate()).toLocaleString()}</span>
              <h2 style={{textAlign:"Center"}}>price: ${Number(price).toLocaleString()}</h2>

            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
