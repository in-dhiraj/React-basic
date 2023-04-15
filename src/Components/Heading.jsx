const Heading = ({data, value}) =>{
    return (
        <> 
        <h1>{data}</h1>
        <p className="display-2" > {value} </p>
        </>
    )
}

export default Heading;