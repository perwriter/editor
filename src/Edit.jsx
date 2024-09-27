// src/App.jsx
import React, { useState } from "react";
import RichTextEditor from "./components/Richtexteditor";

const Edit = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
    console.log(content);  // Output the HTML or delta format content
  };

  return (
    <div>
      <h1>Editor</h1>
      <RichTextEditor value={editorContent} onChange={handleEditorChange} />
      <div>
        {/* <h2>Editor Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} /> */}
      </div>
    </div>
  );
};

export default Edit;
