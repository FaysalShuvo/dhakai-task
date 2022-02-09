import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
// style
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-from">
      <h2>Login</h2>
      <label>
        <span>email: </span>
        <input
          type="email"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password: </span>
        <input
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {error && <p className="error">{error}</p>}
      {isPending ? (
        <button className="btn" disabled>
          Loading...
        </button>
      ) : (
        <button className="btn btn-outline-success ">Login</button>
      )}
    </form>
  );
};

export default Login;
