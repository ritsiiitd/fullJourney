import React, { useEffect } from 'react'
import { Card,FormField,Loader } from "../components";
import { useState } from 'react';

const RenderCards = ({data,title}) => {
  if(data?.length > 0) {
    return data.map((post)=>
      <Card key={post._id} {...post}/>
    )
  }
  return (
    <h2 className='mt-5 text-[14px] max-w-[500px] text-gray-500'>{title}</h2>
  )
}

const Home = () => {
  const [loading,setLoading] = useState(false)
  const [saved,setSaved] = useState(null)
  const [search,setSearch] = useState("")

  useEffect(()=>{
    const fetchPhotos=async()=>{
      console.log("fetching....");
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/save',{
          method:'GET',
          headers : {
            'Content-Type':'application/json',
          },
        })
        if(response.ok){
          // console.log(response);
          const result = await response.json();
          console.log(result);
          setSaved(result.data.reverse());
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
      finally{
        setLoading(false);
      }

    }

    fetchPhotos();

  },[]);//will be called when component loads

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[25px]'>Your Collection</h1>
        <p className='mt-2 text-[14px] max-w-[500px] text-gray-500'>
        Below is a collection of your saved generations</p>
      </div> 

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex items-center justify-center'>
            <Loader />
          </div>
        ):(
          <>
            {search && (<h2 className='mt-2 text-[14px] text-gray-600'>
              Search results for {search}
            </h2>)}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {search ? (
                <RenderCards data="searchedResults"
                title="No search results found"/>
              ):(
                <RenderCards data={saved} title="No collection found"/>
              )}
            </div>
          </>
        ) 
        }
      </div>

    </section>
  )
}

export default Home