import React from 'react';
import img01 from '../../images/img-01.png'
import img02 from '../../images/img-02.png'
import img05 from '../../images/img-05.png'
import img06 from '../../images/img-06.png'
import img07 from '../../images/img-07.png'
import img08 from '../../images/img-08.png'
import './Product.scss'
import { AiFillHeart } from 'react-icons/ai'

function Products() {

    const products = [
        {
            image: img01,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img02,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img06,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img07,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img01,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img02,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img06,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img07,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img01,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img02,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img06,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img07,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img01,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img02,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img08,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img05,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
        {
            image: img06,
            name: '[What happen] How to create ',
            price: '2,500 won',
            like: 236
        },
    ]

    return (
        <div className="body">
            <div className="products">
                {products.map((prd, index) => {
                    return (
                        <div className="container" key={index}>
                            <img src={prd.image} alt={prd.name} />
                            <span className="name">{prd.name}</span>
                            <div className="title">
                                <span>{prd.price}</span>
                                <span><AiFillHeart color="yellow" size="20px" />{prd.like}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="see-more">SEE MORE</div>
        </div>
    );
}

export default Products;