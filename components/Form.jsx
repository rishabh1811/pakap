import { Modal, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
// import { getFunctions, httpsCallable } from "firebase/functions";
// import { app, formFn } from "../lib/firebase-config";

export default function Form() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const url = "https://asia-south1-pakap-9e920.cloudfunctions.net/expressApp"
 

  const submitHandler = async (e) => {
    e.preventDefault()
    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const number = e.currentTarget.number.value
    const message = e.currentTarget.message.value

    const payload = {
      name,
      email,
      number,
      message,
    }

   try {
    // formFn(payload)
    // .then((result) => console.log(result))
    // .catch(error => console.log("Function error:" ,error))

    axios({
      method: "post",
      url: `${url}/form`,
      data: payload
    })
    .then(res => console.log(res))
    .catch(err => console.log("axios error :", err))  


    
   } catch (error) {
      console.log(error); 
   }


   handleOpen()
   e.currentTarget.reset();

  }

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler} className="max-w-lg mx-auto space-y-6 text-center">
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="text-center py-16 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-[400px] shadow-md">
            <h3 className="text-xl font-bold mb-4">Thanks You!</h3>
            <p>We will contact you soon</p>
            <button onClick={handleClose} className="absolute top-4 right-4"><RiCloseLine className="text-2xl" /></button>
        </div>
      </Modal>
    </>
  );
}
