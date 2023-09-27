import React from "react";
import Navbar from "./Navbar";

const Help = () => {
  return (
    <>
    <Navbar/>
      <div className="row justify-content-around">
        <div className="col-md-12">
          <h1 className="text-primary mb-5 text-center bg-body-secondary">Help Desk</h1>
        </div>
      </div>

      <div className="row justify-content-between col-9" id="help">
        <div className="col-md-6" id="help">
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <label for="validationDefault01">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  value=""
                  required
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12 mb-3">
                <label for="validationDefault03">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="Enter E-Mail"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label for="validationDefault03">Mob Number</label>
                <input
                  type="number"
                  className="form-control"
                  required
                  placeholder="Enter Mob Number"
                />
              </div>
              <div className="col-md-3 mb-3 ">
                <label for="validationDefault04">Your Message</label>
                <textarea
                  name=""
                  id=""
                  cols="60"
                  rows="8"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check"></div>
            </div>
            <button className="btn btn-primary position-relative top-50" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Help;
