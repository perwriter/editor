import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }], // Font and font size
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Headers
      ['bold', 'italic', 'underline', 'strike'], // Bold, italic, underline, strikethrough
      [{ 'script': 'sub'}, { 'script': 'super' }], // Subscript and superscript
      [{ 'color': [] }, { 'background': [] }], // Text and background color
      [{ 'align': [] }], // Text alignment
      [{'list': 'ordered'}, {'list': 'bullet'}, { 'indent': '-1'}, { 'indent': '+1' }], // Lists, indents
      [{ 'direction': 'rtl' }], // Text direction (right to left)
      ['blockquote', 'code-block'], // Blockquote and code block
      ['link', 'image', 'video'], // Embed links, images, videos
      ['clean'], // Remove formatting
      [{ 'lineheight': [] }], // Line height (if you want custom line heights)
      [{ 'code': true }], // Inline code formatting
      [{ 'emoji': true }] // Emojis (you'll need an external library for this)
    ]
  };

  const formats = [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
    'script', 'color', 'background', 'align', 'list', 'bullet', 'indent', 'direction',
    'blockquote', 'code-block', 'link', 'image', 'video', 'lineheight', 'code'
  ];

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write something amazing..."
        theme="snow"  // Quill theme - "snow" is the default
      />
    </div>
  );
};

export default RichTextEditor;
