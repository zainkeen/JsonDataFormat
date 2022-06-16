import React, { useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import { AgGridReact } from "ag-grid-react";
const GridModal = (props) => {
  const [visible, setVisible] = useState(false);
  const [filterText, setFilterText] = useState();
  const gridRef = useRef();
  let columnDefs = [
    { headerName: "Group", field: "group", width: 30 },
    { headerName: "Param", field: "param", width: 50 },
    { headerName: "Table", field: "table", width: 50 },
    { headerName: "Value", field: "value", width: 50 },
    { headerName: "Status", field: "status", width: 20 },
  ];

  useEffect(() => {
    gridRef?.current?.api?.setQuickFilter(filterText);
  }, [filterText]);

  return (
    <div>
      {/* {console.log("Props are ", props?.data?.params)} */}
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {
          setVisible(true);
        }}
      >
        View Params
      </button>
      <Modal
        title="Pipeline Params"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1400}
      >
        <h3>Pipeline Params of {props?.name}</h3>
        <div className="params-data">
          <p>ID: {props?.data.ID}</p>
          <p>check: {props?.data.check + " "}</p>
          <p>
            Deltas:{" "}
            {props?.data.deltas.map((element, index) => (
              <span key={index}>{element}, </span>
            ))}
          </p>
        </div>
        <input
          className="ms-5 mb-1"
          placeholder="Search"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="ag-theme-alpine-dark data-grid">
          <AgGridReact
            defaultColDef={{
              flex: 1,
              sortable: true,
              filter: true,
              resizable: true,
            }}
            ref={gridRef}
            columnDefs={columnDefs}
            rowData={props?.data.params}
            enableRangeSelection={true}
            pagination={true}
          ></AgGridReact>
        </div>
      </Modal>
    </div>
  );
};

export default GridModal;
