import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import html2pdf from 'html2pdf.js';
import fileDownload from 'js-file-download';

const RichTextEditor = ({ value, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuName, setMenuName] = useState(null);
  const editorRef = useRef(null);

  // Quill toolbar modules
  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'lineheight': [] }],
      [{ 'code': true }]
    ]
  };

  const formats = [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
    'script', 'color', 'background', 'align', 'list', 'bullet', 'indent', 'direction',
    'blockquote', 'code-block', 'link', 'image', 'video', 'lineheight', 'code'
  ];

  // Menu handlers
  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenuName(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuName(null);
  };

  // Export as PDF
  const exportAsPDF = () => {
    const content = editorRef.current.getEditor().root.innerHTML; // Get content from editor
    const opt = {
      margin: 1,
      filename: 'document.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(content).set(opt).save();
  };

  // Export as DOCX
  const exportAsDocx = () => {
    const content = editorRef.current.getEditor().root.innerHTML;
    const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    fileDownload(blob, 'document.docx');
  };

  return (
    <div>
      {/* Top Navigation Menu */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Button onClick={(e) => handleClick(e, 'file')}>File</Button>
          <Button onClick={(e) => handleClick(e, 'edit')}>Edit</Button>
          <Button onClick={(e) => handleClick(e, 'view')}>View</Button>
          <Button onClick={(e) => handleClick(e, 'insert')}>Insert</Button>
          <Button onClick={(e) => handleClick(e, 'format')}>Format</Button>
          <Button onClick={(e) => handleClick(e, 'tools')}>Suggestions</Button>
          <Button onClick={(e) => handleClick(e, 'paramind')}>ParaMind</Button>
          <Button onClick={(e) => handleClick(e, 'help')}>Help</Button>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menus */}
      {menuName === 'file' && (
        <Menu
          id="file-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>New</MenuItem>
          <MenuItem onClick={handleClose}>Open</MenuItem>
          <MenuItem onClick={exportAsPDF}>Export as PDF</MenuItem>
          <MenuItem onClick={exportAsDocx}>Export as DOCX</MenuItem>
          <MenuItem onClick={handleClose}>Print</MenuItem>
        </Menu>
      )}
      {menuName === 'edit' && (
        <Menu
          id="edit-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Undo</MenuItem>
          <MenuItem onClick={handleClose}>Redo</MenuItem>
          <MenuItem onClick={handleClose}>Cut</MenuItem>
          <MenuItem onClick={handleClose}>Copy</MenuItem>
          <MenuItem onClick={handleClose}>Paste</MenuItem>
        </Menu>
      )}
      {/* Add more menus like View, Insert, Format, Tools, etc., similarly */}

      {/* Rich Text Editor */}
      <div style={{ margin: "20px", padding: "10px", border: "1px solid lightgrey", minHeight: "500px" }}>
        <ReactQuill
          ref={editorRef}
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder="Write something amazing..."
          theme="snow"
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
