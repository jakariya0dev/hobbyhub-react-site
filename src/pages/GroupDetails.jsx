import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const GroupDetails = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);
  const groupData = useLoaderData();
  // console.log(groupData);

  const {
    groupName,
    category,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    userName,
    userEmail,
  } = groupData;

  const handleJoinGroup = (id) => {
    if (joinedGroups.includes(id)) {
      return toast.error("You have already joined this group!");
    }
    const newJoinedGroups = [...joinedGroups, id];
    setJoinedGroups(newJoinedGroups);
    toast.success("Group joined successfully!");
  };

  return (
    <>
      <Helmet>
        <title>HobbyHub {groupName}</title>
        <meta name="description" content={description} />
      </Helmet>
      <section className="w-full min-h-screen p-5">
        <div className="bg-base-300 max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden p-5">
          <img
            src={imageUrl}
            alt={groupName}
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="mt-4 space-y-2">
            <h2 className="text-2xl font-bold">{groupName}</h2>
            <p className="text-sm text-blue-600 font-medium">
              {" "}
              Category:
              <span className="font-normal"> {category}</span>{" "}
            </p>
            <p>{description}</p>

            <div className="mt-3">
              <p>
                <strong>Meeting Location:</strong> {meetingLocation}
              </p>
              <p>
                <strong>Max Members:</strong> {maxMembers}
              </p>
              <p>
                <strong>Start Date:</strong> {startDate}
              </p>
            </div>

            <div className="mt-4 border-t pt-3">
              <p className="text-sm">
                <strong>Created By:</strong> {userName}
              </p>
              <p className="text-sm">
                <strong>Admin Email:</strong> {userEmail}
              </p>
            </div>
            <div className="my-4 flex justify-center">
              {new Date(startDate).setHours(0, 0, 0, 0) >=
              new Date().setHours(0, 0, 0, 0) ? (
                <button
                  onClick={() => handleJoinGroup(groupData._id)}
                  className="btn btn-primary"
                >
                  {joinedGroups.includes(groupData._id)
                    ? "Joined"
                    : "Join Group"}
                </button>
              ) : (
                <p className="border p-2 rounded text-red-400">
                  <button className="btn-primary" disabled>
                    No longer active
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupDetails;
