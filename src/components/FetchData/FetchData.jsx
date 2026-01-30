import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sheetId = "1Ha5QXTQeg2c0nyWQ8pkP-2ia-IQwrJSWcxg-V_V38VE";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    fetch(url)
      .then(res => res.text())
      .then(text => {
        // Google returns invalid JSON → clean it
        const json = JSON.parse(
          text.substring(47).slice(0, -2)
        );

        const rows = json.table.rows.map(row => ({
          name: row.c[0]?.v || "",
          email: row.c[1]?.v || "",
          phone: row.c[2]?.v || "",
          product: row.c[3]?.v || ""
        }));

        setData(rows);
        console.log("Sheet JSON Data:", rows);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Excel Data</h2>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchData;
