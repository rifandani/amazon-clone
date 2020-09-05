import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import app from 'firebase/app';
// files
import UserContext from '../../contexts/UserContext';
import { auth } from '../../config/firebase';

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const [username, setUsername] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  async function reauthenticate(userEmail, currentPassword) {
    // get user detail
    const credential = app.auth.EmailAuthProvider.credential(
      userEmail,
      currentPassword,
    );

    // check if user valid, then continue to updateProfileItems
    try {
      await user.reauthenticateWithCredential(credential);
      console.log('Reauthenticate success');
    } catch (err) {
      console.error('Reauthenticate error', err);
      alert(err.message);
    }
  }

  async function updateProfileItems(username, email, newPassword) {
    try {
      await user.updateProfile({ displayName: username }); // update username
      await user.updateEmail(email); // update email

      // if user change the password
      if (newPassword) {
        await user.updatePassword(newPassword);
      }
    } catch (err) {
      console.error('Update profile items error', err);
      alert(err.message);
    }
  }

  async function save() {
    try {
      await reauthenticate(user.email, currentPassword);
      await updateProfileItems(username, email, newPassword);

      // login again with the new credential
      const result = await auth.signInWithEmailAndPassword(
        email,
        newPassword || currentPassword,
      );

      // set new user context
      setUser(result.user);

      alert('Update profile success');
      history.push('/');
    } catch (err) {
      console.error('Update profile error', err);
      alert(err.message);
    }
  }

  return (
    <div className="flex flex-col mt-3 min-h-screen">
      <div className="w-1/2 mx-auto p-2 mt-0 mb-2">
        <h6 className="font-semibold text-center tracking-wide text-3xl ">
          Edit Profile
        </h6>
      </div>

      {/* edit profile */}
      <div className="flex flex-col mx-auto p-4 w-3/4 border rounded md:w-3/5 lg:w-1/3">
        <p className="mb-2 font-semibold">New username: </p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-3 outline-none focus:shadow-outline focus:bg-orange-100"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <hr className="w-full text-gray-400 mb-2" />

        <p className="mb-2 font-semibold">New email: </p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-3 outline-none focus:shadow-outline focus:bg-orange-100"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <hr className="w-full text-gray-400 mb-2" />

        <p className="mb-2 font-semibold">New password: </p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-3 outline-none focus:shadow-outline focus:bg-orange-100"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <hr className="w-full text-gray-400 mb-2" />

        <p className="mb-2 font-semibold">Current password: </p>
        <input
          className="w-full p-2 border border-black border-opacity-50 rounded h-8 mb-5 outline-none focus:shadow-outline focus:bg-orange-100"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <button
          className="w-full p-2 border border-orange-400 bg-orange-300 text-sm rounded mb-3 hover:bg-orange-400"
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
