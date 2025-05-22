import { useState } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../group/GroupCard";

export default function UpcomingGroups() {
  const groupsData = useLoaderData();
  const [joinedGroups, setJoinedGroups] = useState([]);

  let upcomigGroups = groupsData.filter((group) => {
    const startDate = new Date(group.startDate);
    const today = new Date();

    if (startDate > today) {
      return group;
    }
  });

  upcomigGroups = upcomigGroups.slice(0, 6);

  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-6">
        Discover New Hobbies
      </h2>
      <div className="max-w-7xl mx-auto pt-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {upcomigGroups.map((group) => (
          <GroupCard
            key={group._id}
            group={group}
            joinedGroups={joinedGroups}
            setJoinedGroups={setJoinedGroups}
          />
        ))}
      </div>
    </section>
  );
}
