import React, { useState } from "react";
import Modal from "./../../components/Modal/Modal";

export default function Login(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>login</div>
      <form>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {open ? <Modal name={"login"} close={(event) => setOpen(event)} /> : null}
    </>
  );
}
