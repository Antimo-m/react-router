import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




function NoFound () {
   const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() =>{
            navigate("/")
        },5000)
        return () => clearTimeout(timer)
    }, []);
   

    
    

  return (
    <>
    <h3>Error 404: L'indirizzo da te cercato non è esistente</h3>
    <p>Verrai rispedito alla pagina principale tra 5 secondi.....</p>
    </>
  )
}

export default NoFound