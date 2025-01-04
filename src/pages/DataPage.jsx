import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import "./../styles/DataPage.css";

const DataPage = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchHistoryData = async () => {
      try {
        const response = await fetch("/historyData.json");
        const data = await response.json();
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };
    fetchHistoryData();
  }, []);

  return (
    <div className="data-page">
      {/* <Filters /> */}
      <button className="export-button">Export Report</button>
      <Table data={historyData} />
    </div>
  );
};

export default DataPage;
