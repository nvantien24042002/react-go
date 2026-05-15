function UserProfile({ user }) {
    // Logic
    let ageText = "Chưa cập nhật tuổi";

    if (user.year) {
        const currYear = new Date().getFullYear();
        ageText = `${currYear - user.year} tuổi`;
    }

    // Inline styles
    const cardStyle = {
        width: "320px",
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: "#ae8080",
        boxShadow: "0 8px 24px rgba(184, 184, 184, 0.12)",
        fontFamily: "Arial, sans-serif",
        color: "#000000",
    };

    const headerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px",
    };

    const avatarStyle = {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #ddd",
    };

    const nameStyle = {
        fontSize: "22px",
        margin: 0,
        color: "#222",
    };

    const bodyStyle = {
        fontSize: "15px",
        lineHeight: "1.6",
    };

    const skillsContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "12px",
    };

    const skillBadgeStyle = {
        padding: "6px 10px",
        borderRadius: "999px",
        backgroundColor: "#0055ff",
        color: "#18e90e",
        fontSize: "13px",
        fontWeight: "600",
    };

    const emptyTextStyle = {
        color: "#888",
        fontStyle: "italic",
    };

    // UI
    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                {user.avt && (
                    <img 
                        style={avatarStyle}
                        src={user.avt} 
                        alt={user.name} 
                    />
                )}

                <h2 style={nameStyle}>
                    {user.name ?? "Ẩn Danh"}
                </h2>
            </div>

            <div style={bodyStyle}>
                {user.location ? (
                    <p>📍 {user.location}</p>
                ) : (
                    <p style={emptyTextStyle}>Chưa cập nhật địa chỉ</p>
                )}

                <p>🎂 {ageText}</p>

                <div style={skillsContainerStyle}>
                    {user.skills?.length > 0 ? (
                        user.skills.map((skill, index) => (
                            <span
                                key={index}
                                style={skillBadgeStyle}
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p style={emptyTextStyle}>Chưa có kỹ năng</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;