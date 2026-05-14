import './App.css'
import UserProfile from './components/UserProfile';
import { userList } from './data/userList';
function App() {
  return (
    <div className="app-container">
      {userList.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}
export default App;