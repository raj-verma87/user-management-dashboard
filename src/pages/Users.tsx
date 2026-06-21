import {
  useEffect,
  useState,
} from "react";

import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";

import {
  fetchUsers,
  addUser,
  removeUser,
} from "../services/userService";

import type { User } from "../types/user";

function Users() {
  const [users, setUsers] =
    useState<User[]>([]);

  const [loading, setLoading] =
    useState(true);

  const navigate =
    useNavigate();  

  useEffect(() => {
    let isCancelled = false;

    fetchUsers()
      .then((data) => {
        if (!isCancelled) {
          setUsers(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (!isCancelled) {
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleAddUser =
    async (user: User) => {
      const newUser =
        await addUser(user);

      setUsers([
        ...users,
        newUser,
      ]);
    };

  const handleDeleteUser =
    async (id: number) => {
      await removeUser(id);

      setUsers(
        users.filter(
          (user) =>
            user.id !== id
        )
      );
    };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <UserForm
        onAddUser={
          handleAddUser
        }
      />
      <button
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          minWidth: "80px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={() =>
          navigate("/login")
        }
      >Login</button>
      <UserList
        users={users}
        onDelete={
          handleDeleteUser
        }
      />
    </>
  );
}

export default Users;