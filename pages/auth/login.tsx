import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'


type LoginUserInput = {
  email: string,
  password: string
}

const loginUserSchema = object().shape({
  email: string().required().email(),
  password: string().required().min(8)
})


const Login: NextPage = () => {
  const onSubmit = (values: LoginUserInput) => {
    console.log(values)
  }

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(loginUserSchema)
  })

  return (
    <div className="flex justify-center py-20">
      <div className="md:w-96 p-8 md:border border-black border-opacity-10 md:shadow-sm md:rounded-md">
        <h1 className="text-gray-900 font-medium text-center uppercase">Login</h1>
        <hr className="my-3" />
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-3">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email">Email</label>
              <input 
                className="px-2 py-1 rounded-md border border-black border-opacity-10 focus:ring-transparent" 
                type="text" 
                placeholder="johndoe@gmail.com"
                {...register('email')}
              />
              <small className="text-red-500">{errors.email?.message}</small>
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="password">Password</label>
              <input 
                className="px-2 py-1 rounded-md border border-black border-opacity-10 focus:ring-transparent" 
                type="password" 
                placeholder="********" 
                {...register('password')}
              />
              <small className="text-red-500">{errors.password?.message}</small>
            </div>
            <button 
              className="w-full py-1 bg-blue-400 text-white rounded-md"
              type='submit'
            >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login