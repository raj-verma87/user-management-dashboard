import {
  getUsers,
  createUser,
  deleteUser,
} from "../api/userApi";

export interface User {
  id?: number;
  name: string;
  email: string;
  // add other user fields as needed
}

export const fetchUsers = async () => {
  const response = await getUsers();
  return response.data;
};

export const addUser = async (user: User) => {
  const response = await createUser(user);
  return response.data;
};

export const removeUser = async (id: number) => {
  await deleteUser(id);
};