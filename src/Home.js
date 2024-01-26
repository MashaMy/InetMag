import { useState } from 'react';
import { data } from './data';
import Clothers from './Clothers';
import Buttons from './Buttons';
import './App.css';


function Home(){

  const [clother, setClother] = useState(data);

//const choosenClothers = (searchTerm) => {
 //const afterFilter = data.filter( element => element.searchTerm === searchTerm );
// setСlother(afterFilter);
//}
        
    return (
<div>
<div className='cont'>
<h2 className='back'>Бесплатная доставка</h2>
</div>
    <Buttons 
    data ={data}
    setClother = {setClother} />
    
    <Clothers newClothers={clother}/>
  </div>
)
}

export default Home;


