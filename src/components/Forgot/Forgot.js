import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// files
import { auth } from '../../config/firebase';

const Forgot = () => {
  const [email, setEmail] = useState('');

  async function resetPassword() {
    try {
      await auth.sendPasswordResetEmail(email);

      toast.warning('Check your email to reset your password ⚠️', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error('Password reset error: ', err);
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
        <h1 className="font-normal mt-0">Password assistance</h1>

        <p className="text-xs mb-3">
          Enter the email address associated with your Amazon account.
        </p>

        <p className="font-medium mb-1 text-sm">Email</p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-3 outline-none focus:shadow-outline focus:bg-orange-100"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="w-full p-2 border border-orange-400 bg-orange-300 text-sm rounded mb-3 hover:bg-orange-400"
          onClick={resetPassword}
        >
          Get Reset Link
        </button>
      </div>
    </div>
  );
};

export default Forgot;
