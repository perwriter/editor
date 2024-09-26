import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomDialog from "./components/Dialog";

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
     </div>
   );
};

export default App;