import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch data from the backend API
      const response = await fetch("http://localhost:5000/app/v1/getAllUsers");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="container mx-auto h-screen ">
      {/* //for the table */}
      <table className="table-auto w-full bg-pink-400">
        <thead>
          <tr>
            <th className="text-white bg-fuchsia-600 px-4 py-2">ID</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">First Name</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">Last Name</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">Email</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name.firstname}</td>
              <td className="border px-4 py-2">{user.name.lastname}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;





