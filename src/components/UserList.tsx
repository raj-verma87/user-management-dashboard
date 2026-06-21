import type { User } from "../types/user";

type Props = {
  users: User[];
  onDelete: (id: number) => void;
};

function UserList({
  users,
  onDelete,
}: Props) {
  return (
    <div>
      <h3>User List</h3>

      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>

          <p>{user.email}</p>

          <button
            onClick={() =>
              onDelete(user.id!)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;