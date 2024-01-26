function Buttons ({ data, setClother}) {
    
        const filteredClothers = searchTerm => {
        const FilteredResult = [];
        data.forEach(item => {
          item.searchTerm.forEach(term => {
            if (term === searchTerm) {
              FilteredResult.push(item);
              setClother(filteredClothers);
            }
          })
        })
      }
          
    return (<div className="cont">
        <button className="change" onClick={() => setClother ("data")}>Все</button>
        <button className="change" onClick={() => filteredClothers ("dress")}>Платья</button>
        <button className="change" onClick={() => filteredClothers ("pants")} >Штаны</button>
        <button className="change" onClick={() => filteredClothers ("skirt")}>Юбка</button>
        <button className="change"onClick={() => filteredClothers ("shirt")}>Рубашки</button>
        <button className="change"onClick={() => filteredClothers ("shoes")}>Туфли</button>
        <button className="change"onClick={() => filteredClothers ("bithday")}>На День рождения</button>
        <button className="change"onClick={() => filteredClothers ("Best Seller")}>Бестселлер</button>
    </div>)
}

export default Buttons;
