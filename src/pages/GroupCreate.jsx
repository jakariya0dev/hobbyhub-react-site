import { use, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import categories from "./../../public/categories.json";
import { AuthContext } from "./../providers/AuthProvider.jsx";

export default function GroupCreate() {
  const { user } = use(AuthContext);

  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    meetingLocation: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
    userName: user?.displayName,
    userEmail: user?.email,
  });

  console.log(formData);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/group/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Group created successfully!", data);
        navigate("/dashboard");
        toast.success("Group created successfully!");
      })
      .catch((error) => {
        console.error("Error creating group:", error);
        toast.error("Failed to create group.");
      });
  };

  return (
    <section className="w-full pt-10 min-h-screen p-4">
      <h2 className="text-center text-xl font-semibold text-gray-700">
        Update Group Data
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.userName}
            onChange={handleChange}
            className="w-full border rounded p-2"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Email
          </label>
          <input
            type="url"
            name="imageUrl"
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
  );
}
