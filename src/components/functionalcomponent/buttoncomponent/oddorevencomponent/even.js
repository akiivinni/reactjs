const Even = ()=>{


    let array = [2,3,4,5,6]
    return(
        <div>
            {array.map((num,index)=>(
                <div key={index}>
                {num % 2 === 0 ? 'true' : 'false'}
            </div>
            ))}
        </div>
    )
}
export default Even