import React from 'react'
import './coin.css'
export const coin = ({
    name,symbol,price,volume,image,priceChange,marketCap
}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypt"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price}</p>
                    <p className="coin-volume">Rs.{String(volume).toLocaleString()}</p>
                    {
                    priceChange<0?
                    (<p className='coin-percent-red'>{priceChange.toFixed(2)}%</p>):
                    (<p className='coin-percent-green'>{priceChange.toFixed(2)}%</p>)
                    }
                    <p className="coin-marketcap">
                        Market Cap : Rs.{marketCap.toLocaleString()}
                    </p>
                   
                </div>
            </div>

            <hr/>
           
        </div>
    )
}

export default coin;