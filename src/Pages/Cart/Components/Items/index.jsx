import React, { useState } from 'react'
import "./style.css"

export default function Items() {
    const [itemCounter, setItemCounter] = useState(1);

    return (
        <div>
            <div className="rounded-4 border p-3 h-100">
                <div className="cartItemContainer card mb-3 border-0 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-3 h-100">
                            <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic13.png&w=384&q=75" className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-end">
                                        <h5 className="card-title">Gradiant Graphic T-shirt</h5>
                                        <div className="trashContainer px-2 py-1 pb-1 rounded-1" role = "button">
                                            <i className="trash fa-solid fa-trash-can fa-sm"></i>
                                        </div>
                                    </div>
                                    <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                    <p className="card-text">Color: <span className='fw-normal'>White</span></p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="card-title fw-bold">$145</h4>
                                    <div className='updateItemContainer d-flex justify-content-between align-items-center rounded-5'>
                                        <div role = "button" onClick={() => setItemCounter(Math.max(1, itemCounter - 1))}><i className="fa-solid fa-minus fa-sm mx-2"></i></div>
                                        <div>{itemCounter}</div>
                                        <div role = "button" onClick={() => setItemCounter(itemCounter + 1)}><i className="fa-solid fa-plus fa-sm mx-2"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="cartItemContainer card mb-3 border-0 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-3 h-100">
                            <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic3.png&w=384&q=75" className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center align-items-end">
                                        <h5 className="card-title">Checkered Shirt</h5>
                                        <div className="trashContainer px-2 py-1 pb-1 rounded-1" role = "button">
                                            <i className="trash fa-solid fa-trash-can fa-sm"></i>
                                        </div>
                                    </div>
                                    <p className="card-text m-0">Size: <span className='fw-normal'>Medium</span></p>
                                    <p className="card-text">Color: <span className='fw-normal'>Red</span></p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="card-title fw-bold">$180</h4>
                                    <div className='updateItemContainer d-flex justify-content-between align-items-center rounded-5'>
                                        <div role = "button" onClick={() => setItemCounter(Math.max(1, itemCounter - 1))}><i className="fa-solid fa-minus fa-sm mx-2"></i></div>
                                        <div>{itemCounter}</div>
                                        <div role = "button" onClick={() => setItemCounter(itemCounter + 1)}><i className="fa-solid fa-plus fa-sm mx-2"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="cartItemContainer card mb-3 border-0 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-3 h-100">
                            <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic2.png&w=384&q=75" className="h-100 w-100 img-fluid rounded-2" alt="..."/>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center align-items-end">
                                        <h5 className="card-title">Skinny Fit Jeans</h5>
                                        <div className="trashContainer px-2 py-1 pb-1 rounded-1" role = "button">
                                            <i className="trash fa-solid fa-trash-can fa-sm"></i>
                                        </div>
                                    </div>
                                    <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                    <p className="card-text">Color: <span className='fw-normal'>Blue</span></p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="card-title fw-bold">$240</h4>
                                    <div className='updateItemContainer d-flex justify-content-between align-items-center rounded-5'>
                                        <div role = "button" onClick={() => setItemCounter(Math.max(1, itemCounter - 1))}><i className="fa-solid fa-minus fa-sm mx-2"></i></div>
                                        <div>{itemCounter}</div>
                                        <div role = "button" onClick={() => setItemCounter(itemCounter + 1)}><i className="fa-solid fa-plus fa-sm mx-2"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
