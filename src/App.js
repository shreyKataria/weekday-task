import "./App.css";
import Filter from "./components/filter/filter";
import JobList from "./components/jobList";

function App() {
  return (
    <div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "underline",
          textDecorationColor: "blue",
        }}>
        Search jobs
      </p>
      <div>
        <Filter />
      </div>
      <JobList />
    </div>
  );
}

export default App;
