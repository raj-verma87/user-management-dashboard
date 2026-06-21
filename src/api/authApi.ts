import { api } from './axios';
import type { LoginRequest, LoginResponse } from '../types/auth';

export const login = (data: LoginRequest) => {
  return api.post<LoginResponse>("/auth/login", data);
};
