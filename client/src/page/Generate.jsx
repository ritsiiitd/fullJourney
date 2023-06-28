import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormField,Loader } from "../components";
import { useState } from 'react';

const Generate = () => {
  const navigate  = useNavigate();
  const [form, setForm] = useState({prompt:'',photo:'',title:''})
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit =()=>{

  }
  const handleChange=(e)=>{
    //({...form,prompt:e.target.value})
    setForm({...form,[e.target.name]: e.target.value})
  }

  const generateImage=()=>{

  }

  const saveThisImage=()=>{

  }
  return (
    <section className='max-w-7xl mx-auto'>
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
            name="Prompt"
            placeholder="be as descriptive as possible"
            value={form.prompt}
            handleChange={handleChange}
          />

          <div className='grid gap-10 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1'>
              <div className='relative bg-gray-50 boder-gray-900 text-sm w-64 h-64 flex justify-center items-center rounded-lg'>
                {form.photo ? (
                  <>
                  <img className="w-full h-full object-contain" src={form.photo} alt={form.prompt}/>
                  <div className='mt-5'>
                    <button type='button' onClick={saveThisImage} className='text-white hover:bg-gray-600 bg-rose-600 text-sm font-medium w-5 h-3 rounded-md sm:w-auto text-center p-2 font-mono'>
                      Save
                    </button>
                </div>
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