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

const stylesPDF = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    fontFamily: "OpenSans",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "841.89px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    minHeight: "150pt",
  },
  headerLeft: {
    display: "flex",
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
    gap: "5pt",
    backgroundColor: "#323B4C",
  },

  profileImg: {
    height: "80pt",
    width: "80pt",
    borderRadius: "50%",
  },

  headerRight: {
    display: "flex",
    flexDirection: "column",
    flex: 0.65,
    width: "100%",
    padding: "0px 10px",
    justifyContent: "center",
    gap: "4pt",
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
    letterSpacing: "1mm",
  },
  summary: {
    fontSize: "8pt",
    textAlign: "justify",
  },
});

const TemplateOnePDF = ({ userData }) => {
  console.log(userData);
  const { basics } = userData;
  const { fname, lname, address, dob, jobTitle, nationality, phone, summary } =
    basics;
  return (
    <Document>
      <Page size="A4" dpi={72} style={stylesPDF.page}>
        <View style={stylesPDF.container}>
          {/* Header Section */}
          <View style={stylesPDF.header}>
            <View style={stylesPDF.headerLeft}>
              <Image style={stylesPDF.profileImg} src={ProfileImg}></Image>
            </View>
            <View style={stylesPDF.headerRight}>
              <View style={stylesPDF.name}>
                <Text style={stylesPDF.fname}>{fname + " " + lname}</Text>
              </View>
              <View>
                <Text style={stylesPDF.jobTitle}>{jobTitle}</Text>
              </View>
              <View>
                <Text style={stylesPDF.summary}>{summary}</Text>
              </View>
            </View>
          </View>

          {/* Other Sectioin */}
          <View></View>
        </View>
      </Page>
    </Document>
  );
};

export default TemplateOnePDF;
