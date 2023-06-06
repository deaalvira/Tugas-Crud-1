import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBarang = () => {
  const [nama_barang, setNamabarang] = useState("");
  const [jenis_barang, setJenisbarang] = useState("");
  const [status_barang, setStatusbarang] = useState("Ready");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBarangById();
  }, []);

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/barang/${id}`, {
        nama_barang,
        jenis_barang,
        status_barang,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getBarangById = async () => {
    const response = await axios.get(`http://localhost:5000/barang/${id}`);
    setNamabarang(response.data.nama_barang);
    setJenisbarang(response.data.jenis_barang);
    setStatusbarang(response.data.status_barang);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBarang}>
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
                placeholder="Jenis Barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status Barang</label>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBarang;
