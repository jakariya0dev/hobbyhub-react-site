import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/utils";
import categories from "./../assets/categories.json";

const GroupUpdate = () => {
  const groupData = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    _id: groupData?._id || "",
    groupName: groupData?.groupName || "",
    category: groupData?.category || "",
    description: groupData?.description || "",
    meetingLocation: groupData?.meetingLocation || "",
    maxMembers: groupData?.maxMembers || "",
    startDate: groupData?.startDate || "",
    imageUrl: groupData?.imageUrl || "",
    userName: groupData?.userName || "",
    userEmail: groupData?.userEmail || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${baseUrl}/group/id/${formData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupName: formData.groupName,
        category: formData.category,
        description: formData.description,
        meetingLocation: formData.meetingLocation,
        maxMembers: formData.maxMembers,
        startDate: formData.startDate,
        imageUrl: formData.imageUrl,
        userName: formData.userName,
        userEmail: formData.userEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Group updated successfully!", data);
        toast.success("Group updated successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error updating group:", error);
        toast.error("Failed to update group.");
      });
  };

  return (
    <>
      <Helmet>
        <title>HobbyHub | Update Group</title>
        <meta name="description" content="Update Group" />
      </Helmet>
      <section className="w-full pt-10 min-h-screen p-4">
        <h2 className="text-center text-xl font-semibold ">
          Update Group Data
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-base-300 p-6 rounded-lg shadow space-y-4"
        >
          <div>
            <label className="block text-sm font-medium  mb-1">
              Group Name
            </label>
            <input
              type="text"
              name="groupName"
              placeholder="Group Name"
              value={formData.groupName}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="" disabled>
                Select Hobby Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              Meeting Location
            </label>
            <input
              type="text"
              name="meetingLocation"
              placeholder="Meeting Location"
              value={formData.meetingLocation}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              Max Members
            </label>
            <input
              type="number"
              name="maxMembers"
              placeholder="Max Members"
              value={formData.maxMembers}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">User Name</label>
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              value={formData.userName}
              onChange={handleChange}
              className="w-full border rounded p-2"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">
              User Email
            </label>
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full border rounded p-2"
              readOnly
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Group
          </button>
        </form>
      </section>
    </>
  );
};

export default GroupUpdate;
