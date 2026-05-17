import './App.css'
// import UserProfile from './components/UserProfile';
// import { userList } from './data/userList';
function App() {
  return (
  <>
    <h1 h1 className='text-2xl font-bold bg-red-100 rounded-full'>Hello Taiilwin</h1>  
    <div className="flex items-center justify-center px-3 py-2 h-screen">
      {/* <button className='bg-red-400 py-2 px-4 text-white rounded-full hover:bg-pink-500 md:py-3 md:px-5 cursor-pointer'>
        Click me
      </button> */}
      <div className='w-[230px] bg-[#0d4242] text-[#fff] p-[30px] hover:bg-pink-600'>
        React go
      </div>
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