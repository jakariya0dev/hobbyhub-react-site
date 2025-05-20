import { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";

export default function Dashboard() {
  const groups = useLoaderData();
  const [groupsData, setGroupsData] = useState(groups);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/group/id/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedGroups = groupsData.filter((group) => group._id !== id);
        setGroupsData(updatedGroups);
        console.log("Group deleted successfully!", data);
        toast.success("Group deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting group:", error);
        toast.error("Failed to delete group.");
      });
  };

  return (
    <section className="max-w-7xl mx-auto pt-10 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center my-5">Groups Dashboard</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Group Name</th>
              <th>Meeting Location</th>
              <th>Start Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {groupsData.map((group, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{group.groupName}</td>
                <td>{group.meetingLocation}</td>
                <td>{group.startDate}</td>
                <td className="flex gap-2">
                  <Link to={`/group/${group._id}`}>
                    <button className="btn btn-sm btn-primary">
                      <FaEye size={20} />
                    </button>
                  </Link>

                  <Link to={`/group/${group._id}/edit`}>
                    <button className="btn btn-sm btn-primary">
                      <FaEdit size={20} />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(group._id)}
                    className="btn btn-sm btn-primary"
                  >
                    <MdDeleteForever size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
