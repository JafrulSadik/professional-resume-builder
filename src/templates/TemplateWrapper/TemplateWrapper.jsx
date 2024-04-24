
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: 'column',
    backgroundColor: 'steelblue',
    width : "100%",
    color : "white",
    alignItems : "center"
  },
  container : {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  firstSect : {
    display: "flex",
    flex : 1,
    backgroundColor: "orange",
    justifyContent : 'center',
    color : "white",
    height :  "500px"
  },
  secondSect : {
    display : "flex",
    flex : 1,
    backgroundColor: 'teal',
    justifyContent : 'center',
    color: "white"
  }
});

// Create Document Component
const TemplateWrapper = () => {
  
  // const {title} = props;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.firstSect}>Hi</View>
          <View style={styles.secondSect}>Hello.</View>
        </View>
      </Page>
    </Document>
  )
}

    

export default TemplateWrapper;