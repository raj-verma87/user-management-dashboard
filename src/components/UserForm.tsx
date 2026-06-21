import { useState } from "react";
import type { User } from "../types/user";

type Props = {
  onAddUser: (user: User) => void;
};

function UserForm({ onAddUser }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onAddUser({
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create User</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button type="submit">
        Add User
      </button>
    </form>
  );
}

export default UserForm;