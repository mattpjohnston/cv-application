import { useState } from "react";

function PracticalExperience() {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
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
      <h2 className="text-xl font-bold mb-4">Practical Experience</h2>
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
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="positionTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Position Title
            </label>
            <input
              id="positionTitle"
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="mainResponsibilities"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Main Responsibilities
            </label>
            <textarea
              id="mainResponsibilities"
              name="mainResponsibilities"
              rows="4"
              value={formData.mainResponsibilities}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="dateFrom"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date From
            </label>
            <input
              id="dateFrom"
              name="dateFrom"
              type="date"
              value={formData.dateFrom}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="dateUntil"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date Until
            </label>
            <input
              id="dateUntil"
              name="dateUntil"
              type="date"
              value={formData.dateUntil}
              onChange={handleChange}
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
            <span className="font-medium">Company:</span> {formData.companyName}
          </p>
          <p>
            <span className="font-medium">Position:</span>{" "}
            {formData.positionTitle}
          </p>
          <p>
            <span className="font-medium">Responsibilities:</span>{" "}
            {formData.mainResponsibilities}
          </p>
          <p>
            <span className="font-medium">From:</span> {formData.dateFrom}
          </p>
          <p>
            <span className="font-medium">Until:</span> {formData.dateUntil}
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

export default PracticalExperience;
