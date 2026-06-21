import { useState, type SubmitEventHandler } from "react"
import { loginUser } from "../services/authService";

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    const handleLogin: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        
        try{
            setLoading(true);
            setError("");

            const response = await loginUser({
                email,
                password
            });
            localStorage.setItem("token",response.token);
            alert("Login Successful");
        }
        catch(error){
            setError("Invalid credentials"+error);
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <div style={{width: "350px", margin: "50px auto"}}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input type="Email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Password</label>
                    <input type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}                    
                    />
                </div>

                <br />

                {error && (
                    <p>{error}</p>
                )}
                <button type="submit" disabled={loading}>
                    {loading ? "Login In..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login;