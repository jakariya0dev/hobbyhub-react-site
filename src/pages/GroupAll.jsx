import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import GroupCard from "../components/group/GroupCard";

const GroupsAll = () => {
  const groups = useLoaderData();
  const [sortedGroupData, setSortedGroupData] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);

  useEffect(() => {
    setSortedGroupData(groups); // Set default data
  }, [groups]);

  function sortData(event) {
    const selectedValue = event.target.value;

    if (selectedValue === "upcoming") {
      const updatedGroups = [...groups].sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      );
      setSortedGroupData(updatedGroups);
    } else if (selectedValue === "furthest") {
      const updatedGroups = [...groups].sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      );
      setSortedGroupData(updatedGroups);
    } else {
      setSortedGroupData(groups);
    }
  }

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
        <div className="mb-5">
          Sort by:
          <select
            className="ml-2 border border-gray-300 rounded px-2 py-1"
            onChange={sortData}
          >
            <option value="default">Default</option>
            <option value="upcoming">Upcoming First</option>
            <option value="furthest">Furthest First</option>
          </select>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          All Hobby Groups
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedGroupData.map((group) => (
            <GroupCard
              key={group._id}
              group={group}
              joinedGroups={joinedGroups}
              setJoinedGroups={setJoinedGroups}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GroupsAll;
