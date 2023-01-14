import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="space-y-4 py-4">
      <form className="max-w-xl m-auto space-y-4" >
        <h1 className="font-bold text-2xl">Edit your project profile</h1>
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

          <FileSubmit label="Project thumbnail" id="photo" />
          <FileSubmit label="Business registration form" id="1" />
          <FileSubmit label="Partnership agreement (if any)" id="2" />
          <FileSubmit label="Utility bills for the past 3 months" id="3" />
          <FileSubmit label="Financial statements for the last 3 years (if has been in operations)" id="4" />
          <FileSubmit label="Rental/Leasing agreement (if applicable)" id="5" />
          <FileSubmit label="Company business plan" id="6" />
          <div className="flex justify-center">
            <Link
              href="/sme"
              className="px-4 py-3 font-medium bg-indigo-500 text-white inline-block self-end rounded-md flex justify-center min-w-[8rem] hover:bg-indigo-600 active:bg-indigo-700"
            >
              Save
            </Link>
          </div>
      </form>
    </div>
    </>
  )
}

function FileSubmit({ label, id }) {
  return (
    <div>
      <label htmlFor={id}>{ label}</label>
      <input
        // required
        id={id}
        type="file"
        className="block text-grey-500 border w-full rounded-md bg-gray-50
          file:mr-5 file:py-2 file:px-6
          file:rounded-md file:border-0
          file:text-sm file:font-medium
          file:bg-gray-200 file:text-indigo-600 file:font-bold file:hover:cursor-pointer"
      />
    </div>
  )
}
