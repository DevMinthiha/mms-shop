import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();
  console.log(cart);
  return (
    <div className="flex flex-col gap-5">
      {cart.length > 0 ? (
        cart?.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item?.image}
              className="h-32 border-2 rounded p-4"
              alt=""
            />
            <div className="">
              <h3>{item?.title}</h3>
              <p>{item?.price}</p>
              <p>{item?.qty}</p>
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: item })
                }
              >
                <AiFillDelete className="text-danger text-2xl" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-20">
          <h1 className="text-3xl tracking-wider font-semibold text-info">
            Your Cart is Empty.
          </h1>
          <Link to="/">
            <button className="bg-danger text-primary px-10 py-2 shadow-xl rounded my-5 uppercase">
              Go Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
