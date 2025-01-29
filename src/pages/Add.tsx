export default function AddPage() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-lg">
            <h2 className=" text-center text-2xl font-bold tracking-tight text-gray-900">
              Add
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
                  Company:
                </label>
                <div className="mt-2">
                <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">
                  Phone Number:
                </label>
                <div className="mt-2">
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-900">
                  Upload File:
                </label>
                <div className="mt-2">
                  <input
                    id="fileUpload"
                    name="fileUpload"
                    type="file"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                 
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  