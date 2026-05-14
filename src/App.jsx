import './App.css'
import avtLien from './assets/em.jpg'
import avtTien from './assets/avt_tien.jpg'
import UserProfile from './components/UserProfile';

function App() {
  const userList = [
    {
      id: 1,
      name: "Nguyễn Văn Tiến",
      avt: avtTien,
      location: "Mỹ Thượng",
      year: 2002,
    },
    {
      id: 2,
      name: "Lê Thị Hà Liên",
      avt: avtLien,
      location: "A Lưới",
      year: 2006,
    }
  ];

  return (
    <div className="app-container">
      {userList.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;