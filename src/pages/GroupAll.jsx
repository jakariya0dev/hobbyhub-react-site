
import GroupCard from "../components/group/GroupCard";
import { useLoaderData } from 'react-router';

const GroupsAll = () => {
  const groups = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Hobby Groups</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupsAll;
