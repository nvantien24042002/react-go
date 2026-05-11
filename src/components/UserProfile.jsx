import '../components/UserProfile.css'
import avt_tien from '../assets/avt_tien.jpg'
function UserProfile(){
    const currYear = new Date().getFullYear();
    const user = {
        name:"Nguyễn Văn Tiến",
        location:"Hue",
        birtYear:"2002",
    }
    // UI
    return(
        <>
            <div className="user-card" style={{background: "#f5f5f5", padding:"15px", borderRadius:"15px"}}>
                <h2>{user.name}</h2>
                <img className='avt' src={avt_tien} alt="" />
                <p className="adrress">{user.location}</p>
                <p className="date">{currYear - user.birtYear} tuổi</p>
            </div>
        </>
    )
}
export default UserProfile;