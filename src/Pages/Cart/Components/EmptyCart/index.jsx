import React from 'react'
import "./style.css"

export default function EmptyCart() {
  return (
    <div className='emptyCart d-flex justify-content-center'>
        <div className='text-center'>
            <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-6xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M17 10l-2 -6"></path><path d="M7 10l2 -6"></path><path d="M15 20h-7.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.36 2.055"></path><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M19 16v3"></path><path d="M19 22v.01"></path></svg>
            <p>Your shopping cart is empty</p>
            <button type = "submit" className="shopButton btn btn-light rounded-5 shadow"> Shop </button>
        </div>
    </div>
  )
}