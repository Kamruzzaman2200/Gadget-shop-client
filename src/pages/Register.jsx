/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useForm } from "react-hook-form"



const Register = () => {
  const {CreateUser} =useAuth()
  const {register,handleSubmit,watch,formState:errors} = useForm()
 
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" 
          {...register("email",{required:true})} 
          
           />
           {errors.email && (<p className="text-red-500">Email is required</p>)}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password",{required:true,
            minLength:6
          })}
          
          />
          {errors.password ?.type === "required" && (
          <p className="text-red-500">Password is required</p>)
          }
           {errors.password ?.type === "minLength" && (
          <p className="text-red-500">Password must have at least 6 characters</p>)
          }
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="my-4 text-sm font-light">
        Already have an account?
        <Link to="/login" className="link link-hover text-blue-400">Login</Link>
      </p>
      </form>
      
    </div>
  </div>
</div>
  )
}

export default Register