import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomDialog from "./components/Dialog";
import Edit from "./Edit";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <CustomDialog open={open} onClose={handleClose} />
      <h1 className="text-4xl text-blue-700">Sample of </h1>
      <Edit />
    </div>
  );
};

export default App;
