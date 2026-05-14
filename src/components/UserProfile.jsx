import '../components/UserProfile.css'
function UserProfile({ user }) {
    const currYear = new Date().getFullYear();
    
    return (
        <div className="user-card" style={{ background: "#f5f5f5", padding: "15px", borderRadius: "15px", marginBottom: "10px" }}>
            <h2>{user.name}</h2>
            <img className='avt' src={user.avt} alt={user.name} style={{ width: "100px", borderRadius: "50%" }} />
            <p className="address">Địa chỉ: {user.location}</p>
            <p className="date">Tuổi: {currYear - user.year}</p>
        </div>
    );
}

export default UserProfile;