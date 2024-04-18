import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../lib/UI/react-quill-custom.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "link",
];

const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      className=""
      value={value}
      modules={modules}
      formats={formats}
      onChange={setValue}
    ></ReactQuill>
  );
};

export default TextEditor;
