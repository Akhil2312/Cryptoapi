import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import  Coin  from './coin';
import ReactPaginate from 'react-paginate';

function App() {

    const [coins,setCoins] = useState([]);
    const [search,setSearch]= useState([]);
     const [page,setPage]=useState([]);


    useEffect(()=>{
      const getdata = async ()=>{
        const data = await axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=25&page=1&sparkline=false&_limit=10')
        .then(res=>{
              setCoins(res.data);
                console.log(res.data);
        })
        .catch(error=>console.log(error))

        setPage(data);
      };

       getdata();
    },[]);


const handleChange = e =>{
  setSearch(e.target.value)
}
const filterCoins  = coins.filter(coin=>
  coin.name.toString().toLowerCase().includes(search.toString().toLowerCase()));

const handlePageChange = ()=>{
  console.log('clicked');
}


  return (
    <div>
                  <div className="coin-app">
                    <div className="coin-search">
                      <h1 className="coin-text">
                        Search Currency
                      </h1>
                      <form>
                        <input type="text" placeholder='search here'
                        className='coin-input'
                        onChange={handleChange}/>
                      </form>
                    </div>
      
                    {filterCoins.map(coin =>{
                    return(
                    <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol}
                    marketCap={coin.market_cap}
                    price= {coin.current_price}
                    priceChange = {coin.price_change_percentage_24h}
                    volume= {coin.total_volume}
                    />);
                    })}
     
                </div>
        <ReactPaginate
         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={'...'}
         pageCount={10}
         marginPagesDisplayed={2}
         onPageChange={handlePageChange}
         containerClassName={'pagination'}
         pageClassName={'page-item'}
         pageRangeDisplayed={2}
         pageLinkClassName={'page-link'}
         previousClassName={'page-item'}
         previousLinkClassName={'page-link'}
         nextClassName={'page-item'}
         nextLinkClassName={'page-link'}
         breakClassName={'page-item'}
         breakLinkClassName={'page-link'}
         activeClassName={'active'}
         />
      

    </div>
  );
}

export default App;
