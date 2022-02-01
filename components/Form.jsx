import { TextField } from "@mui/material";
import React from "react";

export default function Form() {
  return (
    <>
      <div className="container">
      <form action="" className="max-w-lg mx-auto space-y-6 text-center">
      <TextField
          required
          id="outlined-required"
          label="Name"
          size="small"
          name="name"
          fullWidth
        />
      <TextField
          id="outlined-required"
          label="Email (optional)"
          size="small"
          name="email"
          fullWidth
        />
      <TextField
          required
          id="outlined-required"
          label="Phone number"
          size="small"
          name="number"
          fullWidth
        />
      <TextField
          
          id="outlined-multiline-flexible"
          label="Message (optional)"
          size="small"
          name="message"
          multiline
          rows={3}
          fullWidth
        />

        <button className="btn mx-auto">Request Call</button>
      </form>
      </div>
    </>
  );
}
