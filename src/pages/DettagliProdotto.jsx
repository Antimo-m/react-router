import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DettagliProdotto() {
    const { id } = useParams();

    const [prodotto, setProdotto] = useState(null);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                setProdotto(resp.data)
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    return (
        <>
            {prodotto !== null ? (
                <div className="d-flex justify-content-center text-center">
                    <div className="card" style={{width: "500px"}}>
                        <img
                            src={prodotto.image}
                            className="card-img-top bg-danger"
                            alt={prodotto.title}
                            style={{ height: "150px", objectFit: "contain" }}
                        />
                        <div className="card-body border border-2">
                            <h5 className="card-title">
                                 Nome Prodotto:
                               {prodotto.title}
                            </h5>

                            <p className="card-text">
                                <span className="text-danger"> Prezzo:</span>  {prodotto.price}$
                            </p>

                            <p className="card-text">
                                <span className="text-danger"> Categoria:</span>  {prodotto.category}
                            </p>

                            <p className="card-text">
                                <span className="text-danger"> Descrizione prodotto:</span>   {prodotto.description}
                            </p>


                            <p className="card-text">
                                <span className="text-danger"> Rating di questo Prodotto:</span>     {prodotto.rating.rate} ({prodotto.rating.count})
                            </p>
                        </div>
                    </div>
                </div>)
                : ""}

        </>
    )
}

export default DettagliProdotto;