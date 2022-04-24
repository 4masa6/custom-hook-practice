import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "山田太郎",
  email: "test@test.com",
  address: "ADDRESS"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
