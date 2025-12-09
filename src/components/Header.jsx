import { NavLink, Links } from "react-router-dom"

function header () {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary gap-3">
                <div class="container-fluid d-flex justify-content-between">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Prodotti">Prodotti</NavLink>
                    <NavLink to="/Chisiamo">Chi siamo</NavLink>
                    </div>
                
            </nav>


      
        </>
    )
}

export default header