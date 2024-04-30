import { StyleSheet } from "@react-pdf/renderer";
import React from "react";
import ProfileImg from "../../assets/Profile/Profile.png";

const styles = StyleSheet.create({
  div: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "841.89px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  headerLeft: {
    display: "flex",
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    backgroundColor: "#323B4C",
  },

  profileImg: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },

  headerRight: {
    display: "flex",
    flex: 0.65,
    flexDirection: "column",
    color: "gray",
    backgroundColor: "white",
    justifyContent: "center",
    padding: "0px 10px",
    gap: "5px",
  },

  name: {
    display: "flex",
    flexDirection: "row",
  },
  fname: {
    fontSize: "20px",
    color: "#323B4C",
    fontWeight: "bold",
  },
  lname: {
    fontSize: "20px",
    color: "#323B4C",
  },
  jobTitle: {
    fontSize: "15px",
    color: "#323B4C",
  },
  summary: {
    fontSize: "10px",
    textAlign: "justify",
  },
});

const TemplateOne = ({ userData }) => {
  console.log(userData);
  const { basics } = userData;
  const { fname, lname, address, dob, jobTitle, nationality, phone, summary } =
    basics;
  return (
    <div className="">
      <div style={styles.div}>
        <div style={styles.container}>
          {/* Basic Details Sect */}
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.leftUp}>
                <img src={ProfileImg} style={styles.profileImg}></img>
              </div>
            </div>
            <div style={styles.headerRight}>
              <div style={styles.name}>
                <span style={styles.fname}>{fname + " "}</span>
                <span style={styles.lname}>{lname}</span>
              </div>
              <div>
                <p style={styles.jobTitle}>{jobTitle}</p>
              </div>
              <div>
                <p style={styles.summary}>{summary}</p>
              </div>
            </div>
          </div>

          {/* Others Details Sect */}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
