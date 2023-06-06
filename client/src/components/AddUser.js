import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nama_barang, setNamabarang] = useState("");
  const [jenis_barang, setJenisbarang] = useState("");
  const [status_barang, setStatusbarang] = useState("Ready");
  const navigate = useNavigate();

  const saveBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/barang", {
        nama_barang,
        jenis_barang,
        status_barang,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveBarang}>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_barang}
                onChange={(e) => setNamabarang(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jenis Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jenis_barang}
                onChange={(e) => setJenisbarang(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={status_barang}
                  onChange={(e) => setStatusbarang(e.target.value)}
                >
                  <option value="Ready">Ready</option>
                  <option value="Sold Out">Sold Out</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
