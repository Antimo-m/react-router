import axios from "axios";
import { useState, useEffect } from "react"


function Prodotti() {
    const [prodotti, setProdotti] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=14")
            .then((resp) => {

                setProdotti(resp.data)
            })
    }, [])

    return (
        <>
            <h2 className="text-center text-info"> I nostri Prodotti</h2>
           
            <div className="d-flex justify-content-center gap-3 flex-wrap"> 
                {prodotti.map((prodotto) => (
                    <div className="card" key={prodotto.id} style={{width:"250px"}}>
                       
                            <img
                                src={prodotto.image}
                                className="card-img-top"
                                alt={prodotto.title}
                                style={{ height: "150px", objectFit: "contain" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {prodotto.title}
                                </h5>
                                <p className="card-text">
                                    ${prodotto.price}
                                </p>
                                <p className="card-text">
                                    {prodotto.category}
                                </p>
                            </div>
                        </div>
                   
                ))}
            </div>

        </>
    )
}

export default Prodotti