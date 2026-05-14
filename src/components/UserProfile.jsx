import '../components/UserProfile.css'
function UserProfile({ user }) {
    // Logic
    let ageText = "Chưa cập nhật tuổi";
    if(user.year){
        const currYear = new Date().getFullYear();
        ageText = `${currYear - user.year}`;
    }
    // UI
    return (
        <div className="user-card">
        <div className="card-header">
            {user.avt && (
                <img className='avt' src={user.avt} alt={user.name} />
            )}
            <h2>{user.name ?? "Ẩn Danh"}</h2>
        </div>

        <div className="card-body">
            {user.location ? (<p>📍 {user.location}</p>):(<p> Chưa cập nhật địa chỉ</p>)}
            
            <p>🎂 {ageText}</p>
            
            <div className="skills-container">
                {user.skills?.length > 0 ? (
                        user.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="skill-badge"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p>Chưa có kỹ năng</p>
                    )}

            </div>
        </div>
        </div>
    );
}
export default UserProfile;