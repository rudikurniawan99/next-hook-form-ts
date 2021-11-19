import { NextPage } from 'next'

const Login = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="md:w-96 p-8 md:border border-black border-opacity-10 md:shadow-sm md:rounded-md">
        <h1 className="text-gray-900 font-medium text-center uppercase">Register</h1>
        <hr className="my-3" />
        <form
        >
          <div className="space-y-3">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email">Email</label>
              <input 
                className="px-2 py-1 rounded-md border border-black border-opacity-10 focus:ring-transparent" 
                type="text" 
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="password">Password</label>
              <input 
                className="px-2 py-1 rounded-md border border-black border-opacity-10 focus:ring-transparent" 
                type="password" 
                placeholder="********" 
              />
            </div>
            <button 
              className="w-full py-1 bg-blue-400 text-white rounded-md"
              type='submit'
            >Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login