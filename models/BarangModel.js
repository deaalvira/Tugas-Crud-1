import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Barang = db.define('tbl_barang',{
    nama_barang: DataTypes.STRING,
    jenis_barang: DataTypes.STRING,
    status_barang: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Barang;

(async()=>{
    await db.sync();
})();