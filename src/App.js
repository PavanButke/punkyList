import './App.css';
import CollectionCard from './components/CollectionCard';
import collectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState , useEffect} from 'react';
 import axios from 'axios'
 import Punklist from './components/Punklist';




function App() {

  const [punkListData , setPunkListData] = useState([])

  useEffect(() => {
        const getMyNfts = async ()=>{
 
          
          const openseaData =  await axios.get(
            'https://testnets-api.opensea.io/assets?asset_contract_address=0x7aa3b7500eB82405D5128D29b73C57423B97bB0a&order_direction=asc'
          )
         console.log(openseaData.data.assets)
            setPunkListData(openseaData.data.assets)
        } 

      return getMyNfts()
  }, [])





  return (
       
      <div className='app'>
      <Header />
      <Punklist punkListData={punkListData}/>
       </div>
  )     

  
}

export default App