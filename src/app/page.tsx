"use client";
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';


export default function Home() {
  // next router 
  const router = useRouter();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [CS, setCS] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
     
    if(!fname || !lname || !CS){
      alert("Please fill in all fields!")
    } 
    if(fname === "trisha ann" && lname === "ramos" && CS === "blue") {
      // push the user to login page
      router.push('/flowers')
    } else {
      alert("Your are not my blue!")
    }
  }
  return (
    <main className="home-component flex min-h-screen flex-col items-center justify-between p-24">
     <div className='form-component'>
        <form 
          className='m-4'
          onSubmit={(e) => handleSubmit(e)}>

          <h1>Answer the form in small letters:</h1>

          {/* First name */}
          <div className="mb-6">
            <label 
              htmlFor="fname" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name:</label>
            <input 
              type="text" 
              id="fname" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="First name..." 
              onChange={(e) => {setFname(e.target.value)}}
              value={fname}
              required/>
          </div>

          {/* Last name */}
          <div className="mb-6">
            <label
              htmlFor="lname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input 
              type="text" 
              id="lname" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              onChange={(e) => {setLname(e.target.value)}}
              value={lname}
              placeholder='Type your name...'
              required/>
          </div>

          {/* Call sign */}
          <div className="mb-6">
            <label 
              htmlFor="CS" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Our Call Sign</label>
            <input 
              type="text" 
              id="CS" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              onChange={(e) => {setCS(e.target.value)}}
              value={CS}
              placeholder='Type your name...'
              required/>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
     </div>
    </main>
  )
}
