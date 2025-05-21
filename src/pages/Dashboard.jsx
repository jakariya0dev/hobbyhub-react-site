import { use, useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import { toast } from "react-toastify";
import LoaderBar from "./../components/common/LoaderBar";
import { AuthContext } from "./../providers/AuthProvider";

export default function Dashboard() {
  const [groupsData, setGroupsData] = useState(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/groups/email/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setGroupsData(data);
      })
      .catch((error) => {
        console.error("Error fetching groups:", error);
      });
  }, [user.email]);

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

  if (groupsData === null) return <LoaderBar />;
  if (groupsData.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center my-5">
          No Groups Created Yet
        </h1>
        <Link to="/group/create">
          <button className="btn btn-primary">Create a Group</button>
        </Link>
      </section>
    );
  }

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
              <tr key={group._id}>
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
