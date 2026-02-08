import { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleIsEditingChange() {
    setIsEditing(!isEditing);
  }
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleIsEditingChange();
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              School
            </label>
            <input
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="e.g. Queen's University Belfast"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title of study
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. BSc Computer Science"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Study
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="space-y-2">
          <p>
            <span className="font-medium">School:</span> {formData.school}
          </p>
          <p>
            <span className="font-medium">Title of study:</span>{" "}
            {formData.title}
          </p>
          <p>
            <span className="font-medium">Date of study:</span> {formData.date}
          </p>
          <button
            onClick={handleIsEditingChange}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mt-2"
          >
            Edit
          </button>
        </div>
      )}
    </section>
  );
}

export default Education;
