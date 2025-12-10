import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DettagliProdotto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [prodotto, setProdotto] = useState(null);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                if (!resp.data.id) {
                    navigate("/notfound");
                    return;
                }

                setProdotto(resp.data);
            })
            .catch((err) => {
                console.log(err)
                navigate("/NoFound")
            })
    }, [id, navigate]);

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
                                <span className="text-danger"> Rating di questo Prodotto:</span>{prodotto.rating.rate} ({prodotto.rating.count})
                            </p>
                        </div>
                    </div>
                </div>)
                : ""}

        </>
    )
}

export default DettagliProdotto;