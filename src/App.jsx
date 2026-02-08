import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">CV Application</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <GeneralInfo />
        <Education />
        <PracticalExperience />
      </div>
    </div>
  );
}

export default App;
