import React from 'react'

function DemoClass() {
  return (
    <div id='bookclass' style={{backgroundColor:"#00B1EC", height:"100vh",width:"100vw", paddingTop:"10rem"}}>
   <form class="w-full max-w-lg" style={{justifyContent:"center",padding:"4rem", paddingTop:"5rem",backgroundColor:"#CEEAF3", margin:"auto", borderRadius:"0.3rem"}}>
   <div>
    <h1 style={{textAlign:"center"}}>Enter Details to Book Class</h1>
      <p>Student Details</p>
    </div>
  <div class="flex flex-wrap -mx-10 mb-2" style={{}}>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div style={{display:"flex"}}>
    <div class="relative" style={{paddingLeft:"1vw"}}>
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Age:
      </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" style={{width:"14vw", height:"6vh"}}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="relative" style={{paddingLeft:"2rem"}}>
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Grade:
      </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" style={{width:"14vw", height:"6vh"}}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
</form>
    </div>
  )
}

export default DemoClass
