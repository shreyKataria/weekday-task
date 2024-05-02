/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Button, Box, Fab } from "@mui/material";
import { useState } from "react";
import "./jobCard.css";

const JobCard = ({ job }) => {
  const {
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
  } = job;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card style={{ borderRadius: "20px", border: "1px solid lightgrey" }}>
      <CardContent>
        <Box style={{ display: "flex", gap: "10px" }}>
          <img style={{ width: "55px" }} src="/company.png" alt="companyLogo" />
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="semibold"
              letterSpacing={2}
              color="grey">
              Company
            </Typography>
            <Typography variant="subtitle1">{jobRole || "Job Role"}</Typography>
          </Box>
        </Box>
        <Typography marginLeft="66px" variant="body2">
          {location}
        </Typography>
        <Typography
          marginY="8px"
          fontWeight="500"
          fontSize="14px"
          color="#37546D">
          Estimated Salary:{" "}
          {`${salaryCurrencyCode || "$"}${minJdSalary} - ${maxJdSalary}`} LPA ✅
        </Typography>
        <Typography fontSize="1rem" fontWeight="semibold" lineHeight="1.5">
          About Company:
        </Typography>
        <Typography fontSize="1rem" fontWeight="bold">
          About us
        </Typography>
        <div style={{ position: "relative", height: "100%" }}>
          <Typography
            variant="body1"
            fontSize="1rem"
            lineHeight="1.2"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "200px",
            }}
            className={isExpanded ? "expanded" : ""}>
            {jobDetailsFromCompany}
          </Typography>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: "50%",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))",
            }}></div>
        </div>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginTop: "-20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}>
          <Fab
            style={{
              whiteSpace: "nowrap",
              color: "blue",
              textTransform: "none",
              letterSpacing: "1.5px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}>
            {isExpanded ? "Read less" : "Read more"}
          </Fab>
        </div>
        <Box>
          <Typography
            variant="body2"
            fontWeight="semibold"
            letterSpacing={2}
            color="grey"
            marginTop="1rem">
            Minimum Experience
          </Typography>
          <Typography variant="subtitle1">{minExp} years</Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            width: "100%",
            padding: "8px 18px",
            background: "rgb(85,239,196)",
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
            marginTop: "0.5rem",
          }}
          href={jdLink}
          target="_blank">
          ⚡Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
