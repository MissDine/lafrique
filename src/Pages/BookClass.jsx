import React from 'react'

const BookClass = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-2 py-8 text-center bg-[#F9FAFB]">
        <h2 className="font-normal text-3xl text-black">Enter Details to Book Class</h2>
        <span className="text-black text-lg">Student Details</span>
        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option selected>Age</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                </div>
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option selected>Grade</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option selected>Have Coding Experience?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option selected>Have Access to Internet and Computer?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
            </div>
        </form>
    </div>
    <div className="flex flex-col items-center gap-2 py-8 text-center bg-[#F9FAFB]">
        <h2 className="font-normal text-3xl text-black">Enter Details to Book Class</h2>
        <span className="text-black text-lg">Parent Details</span>
        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option selected>Is from a Tech Background?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
                <div class="w-full md:w-3/6 px-3 mb-6 md:mb-0">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option selected>Have Basic Computer Skills?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
            </div>
        </form>
    </div>
    <div className="flex flex-row justify-center items-center gap-2 py-8 text-center bg-[#F9FAFB]">
  <form class="w-full max-w-lg">
    <div class="flex flex-row justify-between mb-6">
      <div class="w-2/5 px-3">
        <select id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
          <option selected>Select Date</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class="w-2/5 px-3">
        <select id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
          <option selected>Time?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class="w-4/5 px-3">
        <button class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded">
          Proceed to payment
        </button>
      </div>
    </div>
  </form>
</div>
</>
  )
}

export default BookClass
