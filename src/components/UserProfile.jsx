function UserProfile({ user }) {
    // Logic
    let ageText = "Chưa cập nhật tuổi";

    if (user.year) {
        const currYear = new Date().getFullYear();
        ageText = `${currYear - user.year} tuổi`;
    }  
    // UI
    return (
        <div className= "w-80 bg-blue-200 rounded-2xl my-4 shadow-xl text-black">
            <div className="mb-4 flex items-center gap-4">
                {user.avt && (
                    <img 
                        className="h-16 w-16 rounded-full border-2 border-gray-200 object-cover"
                        src={user.avt} 
                        alt={user.name} 
                    />
                )}

                <h2 className="m-0 text-2xl font-bold text-gray-900">
                    {user.name ?? "Ẩn Danh"}
                </h2>
            </div>

            <div className="text-[15px] leading-relaxed">
                {user.location ? (
                    <p>📍 {user.location}</p>
                ) : (
                    <p className="empty-text">Chưa cập nhật địa chỉ</p>
                )}

                <p>🎂 {ageText}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {user.skills?.length > 0 ? (
                        user.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 rounded-full bg-amber-200 text-sm text-blue-700 hover:bg-red-100 hover:text-red-700 cursor-pointer"
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-400 italic">Chưa có kỹ năng</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;