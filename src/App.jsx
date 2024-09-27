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
      <CustomDialog open={open} onClose={handleClose} />
      <h1 className="text-4xl text-blue-700"> </h1>
      <Edit />
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
    </div>
  );
};

export default App;
