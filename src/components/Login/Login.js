import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
// files
import { auth } from '../../config/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function login(e) {
    try {
      await auth.signInWithEmailAndPassword(email, password);

      toast('Logged in ✔️', {
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
      console.error('Login error', err);
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
        <h1 className="font-normal mt-0">Login</h1>

        <p className="font-medium mb-1 text-sm">Email</p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-3 outline-none focus:shadow-outline focus:bg-orange-100"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="font-medium mb-1 text-sm">Password</p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-3 outline-none focus:shadow-outline focus:bg-orange-100"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 border border-orange-400 bg-orange-300 text-sm rounded mb-3 hover:bg-orange-400"
          onClick={login}
        >
          Continue
        </button>

        <p className="text-xs mb-5">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <Link className="mx-auto" to="/forgot-password">
          <p className="text-xs hover:text-orange-500">Forgot your password?</p>
        </Link>
      </div>

      {/* Redirect to register */}
      <div className="mx-auto py-4 w-1/2 flex flex-col lg:w-1/3 xl:w-1/4">
        <hr className="mt-2" />
        <p className="text-center py-2 text-xs text-gray-600">New to Amazon?</p>
        <hr className="mb-2" />

        <Link to="/register">
          <button className="text-center py-2 w-full border border-gray-400 bg-gray-300 text-sm rounded hover:bg-gray-400">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
