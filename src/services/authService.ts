import {login} from "../api/authApi";
import type { LoginRequest } from "../types/auth";

export const loginUser = async (data: LoginRequest)=>{
    const response = await login(data);
    return response.data;
}
