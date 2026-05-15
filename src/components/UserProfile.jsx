// import "../components/UserProfile.css";
import styles from "../components/UserProfile.module.css"
function UserProfile({ user }) {
    // Logic
    let ageText = "Chưa cập nhật tuổi";

    if (user.year) {
        const currYear = new Date().getFullYear();
        ageText = `${currYear - user.year} tuổi`;
    }

    // Inline classNames
    // const cardclassName = {
    //     width: "320px",
    //     padding: "20px",
    //     borderRadius: "16px",
    //     backgroundColor: "#ae8080",
    //     boxShadow: "0 8px 24px rgba(184, 184, 184, 0.12)",
    //     fontFamily: "Arial, sans-serif",
    //     color: "#000000",
    // };

    // const headerclassName = {
    //     display: "flex",
    //     alignItems: "center",
    //     gap: "12px",
    //     marginBottom: "16px",
    // };

    // const avatarclassName = {
    //     width: "64px",
    //     height: "64px",
    //     borderRadius: "50%",
    //     objectFit: "cover",
    //     border: "2px solid #ddd",
    // };

    // const nameclassName = {
    //     fontSize: "22px",
    //     margin: 0,
    //     color: "#222",
    // };

    // const bodyclassName = {
    //     fontSize: "15px",
    //     lineHeight: "1.6",
    // };

    // const skillsContainerclassName = {
    //     display: "flex",
    //     flexWrap: "wrap",
    //     gap: "8px",
    //     marginTop: "12px",
    // };

    // const skillBadgeclassName = {
    //     padding: "6px 10px",
    //     borderRadius: "999px",
    //     backgroundColor: "#0055ff",
    //     color: "#18e90e",
    //     fontSize: "13px",
    //     fontWeight: "600",
    // };

    // const emptyTextclassName = {
    //     color: "#888",
    //     fontclassName: "italic",
    // };

    // UI
    return (
        <div className={styles.userCard }>
            <div className={styles.cardHeader}>
                {user.avt && (
                    <img 
                        className={styles.avt}
                        src={user.avt} 
                        alt={user.name} 
                    />
                )}

                <h2 className={styles.userName}>
                    {user.name ?? "Ẩn Danh"}
                </h2>
            </div>

            <div className={styles.cardBody}>
                {user.location ? (
                    <p>📍 {user.location}</p>
                ) : (
                    <p className="empty-text">Chưa cập nhật địa chỉ</p>
                )}

                <p>🎂 {ageText}</p>

                <div className={styles.skillsContainer}>
                    {user.skills?.length > 0 ? (
                        user.skills.map((skill, index) => (
                            <span
                                key={index}
                                className={styles.skillBadge}
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p className={styles.emptyText}>Chưa có kỹ năng</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;