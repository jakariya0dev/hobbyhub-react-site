import { useLoaderData } from "react-router";

const GroupCard = () => {
  const groupData = useLoaderData();
  console.log(groupData);

//   if (!group) return null;

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

  return (
    <section>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl overflow-hidden p-5">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full h-60 object-cover rounded-md"
        />
        <div className="mt-4 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{groupName}</h2>
          <p className="text-sm text-blue-600 font-medium">{category}</p>
          <p className="text-gray-600">{description}</p>

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
            <p className="text-gray-700 text-sm">
              <strong>Created By:</strong> {userName}
            </p>
            <p className="text-gray-500 text-sm">{userEmail}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCard;
