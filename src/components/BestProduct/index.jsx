import React from 'react';
import './BestProduct.scss'
import best1 from '../../images/best-image-01.png'
import best2 from '../../images/best-image-02.png'
import best3 from '../../images/best-image-03.png'
import brnumber from '../../images/producticon-bg.png'

function BestProduct() {

    const items = [
        {
            image: best1,
            alt: 'Best_Product_1',
            brnumber: brnumber,
            number: '01'
        },
        {
            image: best2,
            alt: 'Best_Product_2',
            brnumber: brnumber,
            number: '02'
        },
        {
            image: best3,
            alt: 'Best_Product_3',
            brnumber: brnumber,
            number: '03'
        },
    ]

    return (
        <div className="best__product">
            <div className="title">
                <span>Best Product</span>
                <span>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first </span>
            </div>
            <div className="items">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <img src={item.image} alt={item.alt} />
                            <div className="br__number">
                                <img src={item.brnumber} alt={item.number} />
                                <span>{item.number}</span>
                            </div>

                            <div className="reponsive--mobile">
                                <span>
                                    How to create
                                    mobile-optimized
                                </span>
                                <div className="icon--go">
                                    GO
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default BestProduct;