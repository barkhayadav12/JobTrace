"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"
export default function AddNewJob() {
    console.log('hi')
    const [company_name,setCompanyName]=useState('');
    const [position,setPosition]=useState('');
    const [work_type,setWorkType]=useState('');
    const [location,setLocation]=useState('');
    const [status,setStatus]=useState('');
    const router=useRouter();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(!company_name || !position || !work_type || !location || !status)
            {
                alert('Input field is required!')
                return;
            }
            try {
                   const res=await fetch('http://localhost:3000/api/jobs',{
                    method:"POST",
                    header:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({company_name,position,work_type,location,status})
                })
                if(res.ok){
                    router.push('/')
                }else{
                    throw new Error('Failed to create')
                }
            } catch (error) {
                console.log(err)
            }
    }
  return (
    <form onSubmit={handleSubmit} class="max-w-sm mx-auto changeOutline">
      <div class="mb-2 mt-3">
        <label
          for="username-success"
          class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
        >
          Company Name
        </label>
        <input
          onChange={(e)=>setCompanyName(e.target.value)}
          value={company_name}
          type="text"
          id="username-success"
          class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
        />
      </div>
      <div class="mb-2">
        <label
          for="username-success"
          class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
        >
          Position
        </label>
        <input
          onChange={(e)=>setPosition(e.target.value)}
          value={position}
          type="text"
          id="username-success"
          class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
        />
      </div>
      <div class="mb-2">
        <label
          for="username-success"
          class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
        >
          Work Type
        </label>
        <input
          onChange={(e)=>setWorkType(e.target.value)}
          value={work_type}
          type="text"
          id="username-success"
          class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
        />
      </div>
      <div class="mb-2">
        <label
          for="username-success"
          class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
        >
          Location
        </label>
        <input
        onChange={(e)=>setLocation(e.target.value)}
        value={location}
          type="text"
          id="username-success"
          class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
        />
      </div>
      <div class="mb-2">
        <label
          for="username-success"
          class="block mb-1 text-sm font-medium text-black-700 dark:text-white-500"
        >
          Status
        </label>
        <input
        onChange={(e)=>setStatus(e.target.value)}
        value={status}
          type="text"
          id="username-success"
          class="bg-green-50 border border-green-500 text-white-900 dark:text-white-400  dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-green-500"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        ADD
      </button>
      <div></div>
    </form>
  );
}
