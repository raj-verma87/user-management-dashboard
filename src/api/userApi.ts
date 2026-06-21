import {api} from "./axios";
import type {User} from "../types/user";

export const getUsers = () =>
  api.get("/users");

export const createUser = (
  user: User
) => api.post("/users", user);

export const updateUser = (
  id: number,
  user: User
) =>
  api.put(
    `/users/${id}`,
    user
  );

export const deleteUser = (
  id: number
) =>
  api.delete(
    `/users/${id}`
  );