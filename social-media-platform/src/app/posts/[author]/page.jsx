import React from 'react';


const UserData = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">Name:</p>
        <p className="mt-2 text-gray-500">Email: </p>
        <p className="mt-2 text-gray-500">Username: </p>
        <p className="mt-2 text-gray-500">Phone: </p>
        <p className="mt-2 text-gray-500">Website:</p>
        
        <div className="mt-4">
          <div className="text-gray-900 font-semibold">Address:</div>
          <p className="text-gray-500">Street: </p>
          <p className="text-gray-500">Suite: </p>
          <p className="text-gray-500">City: </p>
          <p className="text-gray-500">Zipcode:</p>
          <p className="text-gray-500">Geo: </p>
        </div>

        <div className="mt-4">
          <div className="text-gray-900 font-semibold">Company:</div>
          <p className="text-gray-500">Name: </p>
          <p className="text-gray-500">Catchphrase: </p>
          <p className="text-gray-500">BS: </p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
