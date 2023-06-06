import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BarangList = () => {
  const [barangs, setBarang] = useState([]);

  useEffect(() => {
    getBarang();
  }, []);

  const getBarang = async () => {
    const response = await axios.get("http://localhost:5000/barang");
    setBarang(response.data);
  };

  const deleteBarang = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/barang/${id}`);
      getBarang();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><h1 style={{textAlign:"center",marginTop:"20px",fontSize:"30px"}}>Data Kaki Palsu</h1>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {barangs.map((barang, index) => (
              <tr key={barang.id}>
                <td>{index + 1}</td>
                <td>{barang.nama_barang}</td>
                <td>{barang.jenis_barang}</td>
                <td>{barang.status_barang}</td>
                <td>
                  <Link
                    to={`edit/${barang.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBarang(barang.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default BarangList;
