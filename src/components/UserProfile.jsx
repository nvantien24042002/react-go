import '../components/UserProfile.css'
function UserProfile({ user }) {
    const currYear = new Date().getFullYear();
    
    return (
        <div className="user-card">
        <div className="card-header">
            <img className='avt' src={user.avt} alt={user.name} />
            <h2>{user.name}</h2>
        </div>

        <div className="card-body">
            <p>📍 {user.location}</p>
            <p>🎂 {currYear - user.year} tuổi</p>
            
            <div className="skills-container">
            {user.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                {skill}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
}
export default UserProfile;