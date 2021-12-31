
import './Header.css'
import punkLogo from '../components/assets/header/cryptopunk-logo.png'
import searchIcon from '../components/assets/header/search.png'
import themeSwitchIcon from '../components/assets/header/theme-switch.png'

const Header=()=> {
    return (
        <div className='header'>
        <div  className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt=''></img>
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>


              <img src={searchIcon} />
              
              </div>

              <input className='searchInput' placeholder='Find something may be a collection or a gift..' />
                       </div>
     
     <div className='headerItems'>

        <button className='btn12'>Drop</button>
        <button

           className='btn12'>Marketplace</button>
        <button 
         
        
        className='btn12'>Create</button>

     </div>
    <div className='headerActions'>
      <div className='themeSwitchContainer'>
          <img src={themeSwitchIcon}></img>
      </div>

    </div>

    <div className='logoutContainer'>

      <button  

      className='logoutButton' >
        Log Out
      </button>
            
    </div>
    
</div>
    )
}
export default Header

