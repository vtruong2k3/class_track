export default function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Tổng quan</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm">Tổng số học sinh</h3>
                    <p className="text-3xl font-bold mt-2">0</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm">Tổng số giáo viên</h3>
                    <p className="text-3xl font-bold mt-2">0</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm">Điểm danh hôm nay</h3>
                    <p className="text-3xl font-bold mt-2">0</p>
                </div>
            </div>
        </div>
    );
}
