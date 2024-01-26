function Clothers ({newClothers}) {


    return (
        <div className="products">
            {newClothers.map ((element => {
                const {id, name, searchTerm, price,image } = element;

                return (

                    <div className="product-card" key={id}>
                        <img src={image} width="300px" height="400px" alt="Cloth"/>
                        <div>
                        <h3>{name}</h3>
                        <h4>${price}</h4>
                        </div>
                    </div>
                )
            }
                
                ))}
        </div>
    )
}

export default Clothers;
