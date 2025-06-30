const DashboardOverview = ({ groups, myGroups, user }) => {

  const total = groups.length;
  const active = groups.filter(
    (g) => new Date(g.startDate) >= new Date()
  ).length;
  const inactive = groups.filter(
    (g) => new Date(g.startDate) < new Date()
  ).length;

  const totalMine = myGroups?.length || 0;

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* User Info */}
        <div className="bg-white rounded shadow grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className={`p-10 rounded shadow text-white bg-amber-600`}>
            <p className="text-xl font-bold mt-2">
              User: {user?.displayName || "N/A"}{" "}
            </p>
          </div>
          <div className={`p-10 rounded shadow text-white bg-amber-800`}>
            <p className="text-xl font-bold mt-2">
              Email: {user?.email || "N/A"}{" "}
            </p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Groups" value={total} color="bg-blue-500" />
          <StatCard title="Active Groups" value={active} color="bg-green-500" />
          <StatCard
            title="Inactive Groups"
            value={inactive}
            color="bg-red-500"
          />
          <StatCard title="My Groups" value={totalMine} color="bg-purple-500" />
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;

// Reusable StatCard component
const StatCard = ({ title, value, color }) => (
  <div className={`p-10 rounded shadow text-white ${color}`}>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-6xl font-bold mt-2">{value}</p>
  </div>
);
