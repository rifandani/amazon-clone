import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
// files
import { auth } from '../../config/firebase';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function register(e) {
    try {
      const newUser = await auth.createUserWithEmailAndPassword(
        email,
        password,
      ); // create new user
      await newUser.user.updateProfile({ displayName: username }); // update the displayName with username

      toast('Registered ✔️', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/');
    } catch (err) {
      console.error('Register error', err);
      alert(err.message);
    }
  }

  return (
    <div className="flex flex-col">
      {/* amazon logo */}
      <div className="mx-auto py-3">
        <Link to="/">
          <img
            className="w-24"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
          />
        </Link>
      </div>

      {/* Login input */}
      <div className="mx-auto p-4 w-1/2 flex flex-col border rounded lg:w-1/3 xl:w-1/4">
        <h1 className="font-normal mt-0">Register</h1>

        <p className="font-medium mb-1 text-sm">Username</p>
        <input
          className="w-full border border-black border-opacity-50 rounded h-8 mb-3 p-2 outline-none focus:shadow-outline focus:bg-orange-100"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p className="font-medium mb-1 text-sm">Email</p>
        <input
          className="w-full border border-black border-opacity-50 rounded h-8 mb-3 p-2 outline-none focus:shadow-outline focus:bg-orange-100"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="font-medium mb-1 text-sm">Password</p>
        <input
          className="w-full border border-black border-opacity-50 rounded h-8 mb-3 p-2 outline-none focus:shadow-outline focus:bg-orange-100"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 border border-orange-400 bg-orange-300 text-sm rounded mb-3 hover:bg-orange-400"
          onClick={register}
        >
          Create Account
        </button>

        <p className="text-xs ">
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>

      {/* Redirect to login */}
      <div className="mx-auto py-4 w-1/2 flex flex-col lg:w-1/3 xl:w-1/4">
        <hr className="mt-2" />
        <p className="text-center py-2 text-xs text-gray-600">
          Already have an account?
        </p>
        <hr className="mb-2" />

        <Link to="/login">
          <button className="text-center py-2 w-full border border-gray-400 bg-gray-300 text-sm rounded hover:bg-gray-400">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
