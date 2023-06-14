import React,{useState,useEffect} from 'react'
import Delete from './Delete'
import axios from 'axios'

function Aboutus(){
    const[p,setP]=useState([])
    //const[id,setId]=useState(1)
    useEffect(()=>{
       axios
        // .get(`https://jsonplaceholder.typicode.com/posts/`)
        .get(`https://localhost:7118/api/Doctor`)
        .then(res=>{
            console.log(res)
            setP(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    

    

    // const [post, setPost] = useState({})
    // const [id, setId] = useState(1)
    // const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    // useEffect(() => {
    //     axios
    //         .get(`https://localhost:7118/api/Doctor/${id}`)
    //         .then(res => {
    //             console.log(res)
    //             setPost(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [idFromButtonClick])

    // const handleClick = () => {
    //     setIdFromButtonClick(id)
    // }

    return(
        <div>
            <div></div>
            {<ul>
                {p.map(pdata=>(
                    <li key={pdata.id}>{pdata.name}</li>
                ))}
            </ul>}
            <Delete/>

            {/* <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.name}</div>
            {

            } */}

        </div>
    )
}
export default Aboutus;