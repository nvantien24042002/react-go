import './App.css'
// import UserProfile from './components/UserProfile';
// import { userList } from './data/userList';
function App() {
  return (
  <>
    <h1 h1 className='text-2xl font-bold bg-red-100 rounded-full'>Hello Taiilwin</h1>  
    <div className="flex">
      <button className='bg-red-400 py-2 px-4 text-white rounded-full'>
        Click me
      </button>
    </div>
  </>
  )

  // Logic
  // console.log(userList);
    // const FilteredUsers = userList.filter(
    //     (user) => user.location === "Hà Nội"
    // );

    // const FilteredUsers = userList.filter(
    //     (user) => user.birthYear >= 2000
    // );

    // const FilteredUsers = userList.filter((user) =>
    //     user.skills.some((s) => s.includes("React"))
    // );

  // const FilteredUsers = userList.filter(
  //     (user) =>
  //         user.skills.some((s) => s.includes("React")) &&
  //         user.location === "Hà Nội"
  // );
  // return (

  //   <div className="app-container">
  //     {FilteredUsers?.length > 0 ? (

  //       FilteredUsers.map((user) => (
  //           <UserProfile
  //               key={user.id}
  //               user={user}
  //           />
  //       ))

  //   ) : (

  //       <div className="empty-state">
  //           <p>Không tìm thấy dữ liệu</p>
  //       </div>

  //   )}
  //   </div>
  // );
}
export default App;