import { useState, useEffect } from "react"
import axios from "axios";

const Card = ()=>{

    const [apiData, setApiData] = useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            setApiData(res.data.products)
        }).catch((err)=>{
            console.log("Error", err)
        })
    },[])

    return(
        <>
            <div className="container p-2">

                <div className="row">
                    <div className="col-3"> 

                  {

                    apiData.map((data, i)=>{
                        return( 
                        <div className="card" style={{width:"400px"}}>
                            <img className="card-img-top" src={data.thumbnail} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">{data.title}</h4>
                                <p className="card-text">{data.description}</p>
                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>        
                        )
                    })

                  }

                     </div>
                </div>

            </div>

        </>

    )


}

export default Card;