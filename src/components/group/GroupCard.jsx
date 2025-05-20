import { format } from "date-fns";

export default function GroupCard({ group }) {
  return (
    <div className="card bg-base-100 shadow-md">
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
        <div className="card-actions mt-5 flex-col md:flex-row items-center justify-end">
          <p>
            <strong>Start Date:</strong>{" "}
            {format(new Date(group.startDate), "ccc, d MMM, yyyy")}
          </p>
          <button className="btn btn-primary">Join Group</button>
        </div>
      </div>
    </div>
  );
}
