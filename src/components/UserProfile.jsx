import myPhoto from '.././assets/avt_tien.jpg'
import '../components/UserProfile.css'
function UserProfile(){
    return(
        <>
            <div className="user-card">
                <img className='avt' src={myPhoto} alt="" />
                <p className="adrress">Hue</p>
                <p className="date">2002</p>
            </div>
        </>
    )

}
export default UserProfile;