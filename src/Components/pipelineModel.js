import React, { useState } from "react";
import { Modal } from "antd";
import GridModal from "./gridModal";
const PipelineModel = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {console.log("Main Props are ", props)}
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        View Pipeline
      </button>
      <Modal
        title={`Pipeline of ${props.name}`}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className="pipelineCard-container">
          {props.data.map((element, index) => (
            <div className="pipelineCard" key={index}>
              <p>ID: {element.ID}</p>
              <p>Params Length is : {element.params.length}</p>
              <GridModal data={element} name={props.name} />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PipelineModel;
