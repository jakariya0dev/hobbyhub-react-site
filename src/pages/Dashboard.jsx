import { use, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import DashboardOverview from "../components/dashboard/Overview";
import { baseUrl } from "../utils/utils";
import LoaderBar from "./../components/common/LoaderBar";
import { AuthContext } from "./../providers/AuthProvider";

export default function Dashboard() {
  const [myGroupsData, setmyGroupsData] = useState(null);
  const [groupsData, setgroupsData] = useState(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`${baseUrl}/groups/email/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setmyGroupsData(data);
      })
      .catch((error) => {
        console.error("Error fetching groups:", error);
      });

    fetch(`${baseUrl}/groups`)
      .then((response) => response.json())
      .then((data) => {
        setgroupsData(data);
      })
      .catch((error) => {
        console.error("Error fetching groups:", error);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${baseUrl}/group/id/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => {
            const updatedGroups = myGroupsData.filter(
              (group) => group._id !== id
            );
            setmyGroupsData(updatedGroups);
            // console.log("Group deleted successfully!", data);
            Swal.fire({
              title: "Deleted!",
              text: "Your group has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting group:", error);
            toast.error("Failed to delete group.");
          });
      }
    });
  };

  if (myGroupsData === null || groupsData === null) return <LoaderBar />;

  return (
    <>
      <Helmet>
        <title>HobbyHub | Dashboard</title>
        <meta name="description" content="Group Dashboard" />
      </Helmet>
      <section className="max-w-7xl mx-auto pt-10 min-h-screen p-4">
        <h1 className="text-3xl font-bold text-center my-5">User Dashboard</h1>
        <Link to="/group/create" className="flex justify-end mb-5">
          <button className="btn btn-primary">Create a Group</button>
        </Link>
        <DashboardOverview
          groups={groupsData}
          myGroups={myGroupsData}
          user={user}
          
        />

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-10">
          {myGroupsData.length === 0 ? (
            <section className="py-20 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-center my-5">
                No Group Created By You
              </h1>
              <Link to="/group/create">
                <button className="btn btn-primary">Create a Group</button>
              </Link>
            </section>
          ) : (
            <table className="table bg-base-300">
              <caption className="text-xl leading-relaxed tracking-wide font-semibold my-4">
                Groups Created By You
              </caption>
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
                {myGroupsData.map((group, index) => (
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
          )}
        </div>
      </section>
    </>
  );
}
