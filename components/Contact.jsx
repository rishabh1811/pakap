/* eslint-disable @next/next/no-img-element */
import { Modal } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
// import { numberFn } from '../lib/firebase-config'

export default function Contact() {
  const [number, setNumber] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  const clickHandler = () => {
    const url = "https://asia-south1-pakap-9e920.cloudfunctions.net/expressApp";
    // const url = "https://jsonplaceholder.typicode.com/todos/1";
    const payload = { number };
    console.log("Payload :", payload);

    try {
      axios
        .post(`${url}/number`, payload)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }

    handleOpen()
    setNumber("")
  };

  return (
    <>
      <div className="bg-[#262A37]">
        <div className="container text-white text-center relative py-16 z-0">
          <p className="">Leave Your Number</p>
          <h1 className="heading mb-6">
            We will contact you about your requirements
          </h1>
          <input
            className="rounded-3xl py-3 px-4 block mx-auto mb-4 text-black"
            type="text"
            name="mobile"
            id="mobile"
            value={number}
            placeholder="Your contact number"
            required
            onChange={changeHandler}
          />
          <button onClick={clickHandler} className="btn z-10">
            Request Call
          </button>
          <img
            className="absolute bottom-1 left-1  -z-10"
            src="/images/dots.png"
            alt="dots"
          />
        </div>
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
