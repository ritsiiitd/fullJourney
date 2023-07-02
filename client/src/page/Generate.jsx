import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormField,Loader } from "../components";
import { useState } from 'react';

const Generate = () => {
  const navigate  = useNavigate();
  const [form, setForm] = useState({prompt:'',photo:[],title:''})
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(-1);

  const handleSubmit =()=>{

  }
  const handleChange=(e)=>{
    //({...form,prompt:e.target.value})
    setForm({...form,[e.target.name]: e.target.value})
  }

  const generateImage=async()=>{
    if(form.prompt){
      try {
        setGenerating(true);
        const response = await fetch('http://localhost:8080/api/v1/fullJourney'
        ,{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({prompt:form.prompt}),
        });
        const data = await response.json();
        console.log("hello from",data.imageLinks);
        setForm({...form,photo:data.imageLinks});

      } catch (error) {
        alert(error);
      }
      finally{
        setGenerating(false);
      }
    }
    else{
      alert("Enter a prompt")
    }
  }

  const saveThisImage=async(e)=>{
    e.preventDefault();
    if(form.prompt && form.photo){
      setLoading(true);
      try{
        let arg1 = parseInt(e.target.getAttribute('arg1'));
        setClicked(arg1);
        const response = await fetch('http://localhost:8080/api/v1/save'
        ,{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({name:form.prompt,prompt:form.prompt,photo:form.photo[arg1]}),
        });
        console.log("save??",response)
        // await response.json();
        navigate('/');
      }
      catch(err){
        console.log("did not save");
        alert(err);
      }
      finally{
        setLoading(false);
      }
    }
    else{
      alert("No photo to save")
    }
  }
  return (
    <section className=' w-full mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[25px]'>Create Art</h1>
        <p className='mt-2 text-[14px] max-w-[500px] text-gray-500'>
        Generate imaginative AI images using a prompt</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6'>
        <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="say something like: interior design blue room modern style"
            value={form.prompt}
            handleChange={handleChange}
          />

          <div className='grid gap-20 container lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 w-full grid-cols-1'>
              <div className='relative flex-col bg-gray-50 boder-gray-900 text-sm w-64 h-64 flex justify-center items-center rounded-lg'>
                {form.photo ? (
                  <>
                    <img className="w-full h-full object-contain" src={form.photo[0]} alt={form.prompt}/>
                    {form.photo[0] && (<button type="button"
                      onClick={saveThisImage}
                      disabled = {!form.photo || loading}
                      arg1='0'
                      className='text-white hover:bg-gray-600 bg-green-600 text-sm font-medium w-20 text-center p-2 rounded-full font-mono'>
                        {clicked==0? 'Saving':loading ? ":')":"Save"}
                    </button>)}
                  </> 
                ):(<></>)}
                {generating && (
                  <div className='absolute flex justify-center items-center '>
                    <Loader />
                  </div>
                )}
                
              </div>
              

              <div className='relative bg-gray-50 flex-col boder-gray-900 text-sm w-64 h-64 flex justify-center items-center rounded-lg'>
                {form.photo ? (
                  <>
                    <img className="w-full h-full object-contain" src={form.photo[1]} alt={form.prompt}/>
                    {form.photo[1] && (<button type="button"
                      onClick={saveThisImage}
                      disabled = {!form.photo || loading}
                      arg1='1'
                      className='text-white hover:bg-gray-600 bg-green-600 text-sm font-medium w-20 text-center p-2 rounded-full font-mono'>
                        {clicked==1? 'Saving':loading ? ":')":"Save"}
                    </button>)}
                  </>   
                ):(<></>)}
                {generating && (
                  <div className='absolute flex justify-center items-center '>
                    <Loader />
                  </div>
                )}
              
              </div>
              <div className='relative bg-gray-50 boder-gray-900 flex-col text-sm w-64 h-64 flex justify-center items-center rounded-lg'>
                {form.photo ? (
                  <>
                    <img className="w-full h-full object-contain" src={form.photo[2]} alt={form.prompt}/>
                    {form.photo[2] && (<button type="button"
                      onClick={saveThisImage}
                      disabled = {!form.photo || loading}
                      arg1='2'
                      className='text-white hover:bg-gray-600 bg-green-600 text-sm font-medium w-20 text-center p-2 rounded-full font-mono'>
                        {clicked==2? 'Saving':loading ? ":')":"Save"}
                    </button>)}
                  </>   
                ):(<></>)}
                {generating && (
                  <div className='absolute flex justify-center items-center '>
                    <Loader />
                  </div>
                )}
              
              </div>
              <div className='relative bg-gray-50 boder-gray-900 flex-col text-sm w-64 h-64 flex justify-center items-center rounded-lg'>
                {form.photo ? (
                  <>
                    <img className="w-full h-full object-contain" src={form.photo[3]} alt={form.prompt}/>
                    {form.photo[3] && (<button type="button"
                      onClick={saveThisImage}
                      disabled = {!form.photo || loading}
                      arg1='3'
                      className='text-white hover:bg-gray-600 bg-green-600 text-sm font-medium w-20 text-center p-2 rounded-full font-mono'>
                        {clicked==3? 'Saving':loading ? ":')":"Save"}
                    </button>)}
                  </>   
                ):(<></>)}

                {generating && (
                  <div className='absolute flex justify-center items-center '>
                    <Loader />
                  </div>
                )}
              
              </div>
          </div>

          <div className='mt-5 flex gap-5'>
            <button type="button"
            onClick={generateImage}
            disabled = {generating}
            className='text-white hover:bg-gray-600 bg-rose-600 text-sm font-medium w-full sm:w-auto text-center p-2 rounded-md font-mono'>
              {generating ? 'Asking openAI to show magic ...':'Generate'}
            </button>
          </div>

        </div>
      </form>

    </section>
  )
}

export default Generate