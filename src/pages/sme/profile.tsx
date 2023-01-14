export default function Home() {
  return (
    <>
    <div className="space-y-4">
      <form className="max-w-xl m-auto space-y-4" >

          <div>
            <label htmlFor="name">Project Name</label>
            <input
              id="name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="desc">Give a brief description of your project</label>
            <textarea
              id="desc"
              className="block w-full p-2 text-gray-900 border border-gray-300 text-sm rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="photo">Upload a picture of your product</label>
            <input
              // required
              id="photo"
              type="file"
              className="block text-grey-500 border w-full rounded-md bg-gray-50
                file:mr-5 file:py-2 file:px-6
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-gray-200 file:text-indigo-600 file:font-bold file:hover:cursor-pointer"
            />
            <p className="mt-1 text-gray-500 text-sm" id="file_input_help">
              PNG, JPG or GIF
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-3 font-medium bg-indigo-500 text-white inline-block self-end rounded-md flex justify-center min-w-[8rem] hover:bg-indigo-600 active:bg-indigo-700"
            >

            </button>
          </div>
      </form>







      {/* <h2>Invesment Status</h2>
      <h2>Your Investors</h2>
      <ul>
        <li>RHB</li>
        <li>HLB</li>
        <li>UOB</li>
        <li>CIMB</li>
      </ul> */}
    </div>
    </>
  )
}
