import axios from "axios";
import { useState, useEffect } from "react"


function Prodotti() {
    const [prodotti, setProdotti] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=5")
            .then((resp) => {

                setProdotti(resp.data)
            })
    }, [])

    return (
        <>
            <h2> I nostri Prodotti</h2>
            {prodotti.map((prodotto) => {
                return (
                <div class="card" >
                    <img src={prodotto.image} class="card-img-top" alt={prodotto.title} />
                    <>
                        <div class="card-body">
                            <h5 class="card-title">{prodotto.title}</h5>
                            <p class="card-text">{prodotto.price}</p>
                            <p  class="card.text">{prodotto.description}</p>
                            <p class="card.text">{prodotto.category}</p>
                        </div>
                    </>
                </div>
                )
            })}

        </>
    )
}

export default Prodotti