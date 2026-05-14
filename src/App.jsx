import './App.css'
import { Button } from './components/button';
// import UserProfile from './components/UserProfile';
// import { userList } from './data/userList';
// function App() {
//   return (
//     <div className="app-container">
//       {userList.map((user) => (
//         <UserProfile key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }
function App(){
  return(
    <>
    <Button>👉 Đăng nhập <strong>Nhận ưu đãi tại đây</strong></Button>
    <Button>®️ Đăng ký</Button>
    </>
  )
}
export default App;