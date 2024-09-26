import React, { useState } from "react";
import {
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   TextField,
   Button,
   Typography,
   Grid,
} from "@mui/material";

const CustomDialog = ({ open, onClose }) => {
   // State to manage the input fields
   const [formData, setFormData] = useState(
     Array.from({ length: 22 }, () => "")
   );
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   // Handle changes to input fields
   const handleInputChange = (index, event) => {
     const newFormData = [...formData];
     newFormData[index] = event.target.value;
     setFormData(newFormData);
   };

   // Handle form submission (for demonstration purposes)
   const handleSubmit = () => {
     console.log("Title:", title);
     console.log("Description:", description);
     console.log("Form Data:", formData);
     onClose(); // Close the dialog on submission
   };

   return (
     <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
       <DialogTitle>Custom Dialog</DialogTitle>
       <DialogContent>
         <TextField
           label="Title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           fullWidth
           margin="normal"
         />
         <TextField
           label="Description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           fullWidth
           margin="normal"
           multiline
           rows={2}
         />

         <Typography variant="h6" gutterBottom>
           Input Fields
         </Typography>

         <Grid container spacing={2}>
           {formData.map((field, index) => (
             <Grid item xs={12} sm={6} md={4} key={index}>
               <TextField
                 label={`Field ${index + 1}`}
                 value={field}
                 onChange={(e) => handleInputChange(index, e)}
                 fullWidth
               />
             </Grid>
           ))}
         </Grid>
       </DialogContent>
       <DialogActions>
         <Button onClick={onClose} color="primary">
           Cancel
         </Button>
         <Button onClick={handleSubmit} color="primary"
variant="contained">
           Submit
         </Button>
       </DialogActions>
     </Dialog>
   );
};

export default CustomDialog;