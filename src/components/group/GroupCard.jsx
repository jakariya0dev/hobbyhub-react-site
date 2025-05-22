import { format } from "date-fns";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function GroupCard({ group, setJoinedGroups, joinedGroups }) {
  const navigate = useNavigate();

  const handleJoinGroup = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      setJoinedGroups((prev) => [...prev, groupId]);
      toast.success("Group joined successfully!");
    } else {
      toast.error("You have already joined.");
    }
  };

  return (
    <div className="card bg-base-300 shadow-lg border border-base-content/10">
      <figure>
        <img
          src={group.imageUrl}
          alt={group.groupName}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{group.groupName}</h2>

        <p>
          <strong>Location:</strong> {group.meetingLocation}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {format(new Date(group.startDate), "ccc, d MMM, yyyy")}
        </p>
        <div className="card-actions mt-5 items-center justify-between">
          <button
            onClick={() => navigate(`/group/${group._id}`)}
            className="btn btn-accent"
          >
            View Details
          </button>
          {new Date(group.startDate) > new Date() ? (
            <button
              onClick={() => handleJoinGroup(group._id)}
              className="btn btn-primary"
            >
              {joinedGroups.includes(group._id) ? "Joined" : "Join"}
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
  );
}
