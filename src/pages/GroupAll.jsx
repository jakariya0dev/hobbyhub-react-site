import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import GroupCard from "../components/group/GroupCard";

const GroupsAll = () => {
  const groups = useLoaderData();
  // const groups = [];
  const [joinedGroups, setJoinedGroups] = useState([]);

  if (!groups || groups.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">No groups found</h2>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>HobbyHub | All Hobby Groups</title>
        <meta name="description" content="all hobby groups" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          All Hobby Groups
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <GroupCard
              key={index}
              group={group}
              setJoinedGroups={setJoinedGroups}
              joinedGroups={joinedGroups}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GroupsAll;
