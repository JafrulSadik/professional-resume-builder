import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import FontOpenSansBold from "../../assets/Fonts/OpenSans/OpenSansBold.ttf";
import FontOpenSansNormal from "../../assets/Fonts/OpenSans/OpenSansRegular.ttf";
import ProfileImg from "../../assets/Profile/Profile.png";

Font.register({
  family: "OpenSans",
  fonts: [
    {
      src: FontOpenSansBold,
      fontWeight: "bold",
    },
    {
      src: FontOpenSansNormal,
      fontWeight: "normal",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "841.89px",
  },
  leftSect: {
    flex: 0.35,
    display: "flex",
    flexDirection: "column",
    color: "white",
    backgroundColor: "#323B4C",
    alignItems: "center",
  },
  leftUp: {
    display: "flex",
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "5pt",
  },
  profileImg: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  leftDown: {
    flex: 0.8,
    width: "100%",
    // backgroundColor: "orange",
  },
  rightSect: {
    flex: 0.65,
    display: "flex",
    flexDirection: "column",
    color: "gray",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightUp: {
    display: "flex",
    flexDirection: "column",
    flex: 0.2,
    width: "100%",
    padding: "0px 10px",
    justifyContent: "center",
    // backgroundColor: "orange",
  },
  name: {
    display: "flex",
    flexDirection: "row",
  },
  fname: {
    fontSize: "20pt",
    color: "#323B4C",
    fontWeight: "bold",
  },
  lname: {
    fontSize: "20pt",
    color: "#323B4C",
  },
  jobTitle: {
    fontSize: "20pt",
    color: "#323B4C",
  },
  summary: {
    fontSize: "10pt",
  },
  rightDown: {
    flex: 0.8,
    width: "100%",
    // backgroundColor: "gray",
  },
});
const stylesPDF = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    fontFamily: "OpenSans",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "841.89px",
  },
  leftSect: {
    flex: 0.35,
    display: "flex",
    flexDirection: "column",
    color: "white",
    backgroundColor: "#323B4C",
    alignItems: "center",
  },
  leftUp: {
    display: "flex",
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "5pt",
  },
  profileImg: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  leftDown: {
    flex: 0.8,
    width: "100%",
    // backgroundColor: "orange",
  },
  rightSect: {
    flex: 0.65,
    display: "flex",
    flexDirection: "column",
    color: "gray",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightUp: {
    display: "flex",
    flexDirection: "column",
    flex: 0.2,
    width: "100%",
    padding: "0px 10px",
    justifyContent: "center",
    // backgroundColor: "orange",
  },
  name: {
    display: "flex",
    flexDirection: "row",
  },
  fname: {
    fontSize: "20pt",
    color: "#323B4C",
    fontWeight: "bold",
  },
  lname: {
    fontSize: "20pt",
    color: "#323B4C",
  },
  jobTitle: {
    fontSize: "10pt",
    color: "#323B4C",
  },
  summary: {
    fontSize: "10pt",
  },
  rightDown: {
    flex: 0.8,
    width: "100%",
    // backgroundColor: "gray",
  },
});

const TemplateOne = ({ userData, isPdf, isLive }) => {
  console.log(userData);
  const { basics } = userData;
  const { fname, lname, address, dob, jobTitle, nationality, phone, summary } =
    basics;
  return (
    <Document>
      <Page size="A4" dpi={72} style={isLive ? styles.page : stylesPDF.page}>
        <View style={isLive ? styles.container : stylesPDF.container}>
          <View style={isLive ? styles.leftSect : stylesPDF.leftSect}>
            <View style={isLive ? styles.leftUp : stylesPDF.leftUp}>
              {isPdf ? (
                <Image
                  style={isLive ? styles.profileImg : stylesPDF.profileImg}
                  src={ProfileImg}
                ></Image>
              ) : (
                <img
                  src={ProfileImg}
                  style={isLive ? styles.profileImg : stylesPDF.profileImg}
                ></img>
              )}
            </View>
            <View style={isLive ? styles.leftDown : stylesPDF.leftDown}>
              <Text>Left Down Section</Text>
            </View>
          </View>
          <View style={isLive ? styles.rightSect : stylesPDF.rightSect}>
            <View style={isLive ? styles.rightUp : stylesPDF.rightUp}>
              <View style={isLive ? styles.name : stylesPDF.name}>
                <Text style={isLive ? styles.fname : stylesPDF.fname}>
                  {fname + " "}
                </Text>
                <Text style={isLive ? styles.lname : stylesPDF.lname}>
                  {lname}
                </Text>
              </View>
              <View>
                <Text style={isLive ? styles.jobTitle : stylesPDF.jobTitle}>
                  {jobTitle}
                </Text>
              </View>
              <View>
                <Text style={isLive ? styles.summary : stylesPDF.summary}>
                  {summary}
                </Text>
              </View>
            </View>
            <View style={isLive ? styles.rightDown : stylesPDF.rightDown}>
              <Text>Left Down Section</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TemplateOne;
