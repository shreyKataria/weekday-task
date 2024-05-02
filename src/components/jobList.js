import { CircularProgress, Grid } from "@mui/material";
import JobCard from "./jobCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const JOBS_ENDPOINT = "https://api.weekday.technology/adhoc/getSampleJdJSON";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [totalJobs, setTotalJobs] = useState(0);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ limit: 10, offset: offset }),
      };

      const response = await fetch(JOBS_ENDPOINT, requestOptions);
      const data = await response.json();

      setTotalJobs(data.totalCount);
      setOffset(offset + 10);
      setJobs(initialLoadComplete ? [...jobs, ...data.jdList] : data.jdList);
      setInitialLoadComplete(true);
    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={getJobs}
      hasMore={jobs.length < totalJobs}
      loader={
        <div
          key="loader"
          style={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "center",
          }}>
          <CircularProgress />
        </div>
      }>
      <div key="job-list">
        <Grid container spacing={2}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </div>
    </InfiniteScroll>
  );
};

export default JobList;
