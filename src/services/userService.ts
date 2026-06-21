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
  const data = response.data;

  if (Array.isArray(data)) {
    return data;
  }

  if (data && Array.isArray(data.users)) {
    return data.users.map(
      (user: {
        id?: number;
        name?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
      }) => ({
        id: user.id,
        name:
          user.name ||
          [user.firstName, user.lastName]
            .filter(Boolean)
            .join(" ") ||
          user.email,
        email: user.email,
      })
    );
  }

  return [];
};

export const addUser = async (user: User) => {
  const response = await createUser(user);
  const data = response.data;

  return {
    id: data.id,
    name:
      data.name ||
      [data.firstName, data.lastName]
        .filter(Boolean)
        .join(" ") ||
      data.email,
    email: data.email,
  };
};

export const removeUser = async (id: number) => {
  await deleteUser(id);
};