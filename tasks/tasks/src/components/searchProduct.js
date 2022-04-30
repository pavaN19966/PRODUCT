import React,{useState}from 'react';
import  ProductGet  from './productGet';

export default function SearchProduct() {
    const [search,setSearch]=useState('');
    const [data,setData] =useState([]);
   

    const submitHandler = e =>{

        e.preventDefault();
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then( 
         response =>response.json()
         )
         .then(
             data => { setData(data.meals)
             
             
             })
         console.log(search)
             
         .catch(error=>{
             console.log(error)
         })
        }
  return (
    <div>
       
        <center>
            <h1 className="text-warning">FOOD RECIPT</h1>
           </center>
              <center>
                <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  className="form-control" placeholder="Pls Enter Food Name"/> <br/>
                 <input type="submit" className="btn btn-primary" value="search" />
                 </form>

                 {data.length>=1 ? <ProductGet  data={data}/>:null}
                 </center>
              </div>
           
           
             
                 
          
   
  )
}
