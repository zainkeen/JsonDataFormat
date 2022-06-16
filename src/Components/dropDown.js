import React from "react";
import { Collapse } from "antd";

const DropDown = (props) => {
  const { Panel } = Collapse;
  return (
    <Collapse accordion defaultActiveKey={1}>
      <Panel header="Created By" key="1">
        <div className="ms-2">
          <p>
            <strong>First Name:</strong> {props.createdBy.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {props.createdBy.last_name}
          </p>
          <p>
            <strong>Email:</strong> {props.createdBy.email}
          </p>
          <p>
            <strong>ID:</strong> {props.createdBy.id}
          </p>
        </div>
      </Panel>
      <Panel header="Updated By" key="2">
        <div className="ms-2">
          <p>
            <strong>First Name:</strong> {props.updatedBy.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {props.updatedBy.last_name}
          </p>
          <p>
            <strong>Email:</strong> {props.updatedBy.email}
          </p>
          <p>
            <strong>ID:</strong> {props?.updatedBy.id}
          </p>
        </div>
      </Panel>
      <Panel header="Source" key="3">
        <div className="ms-2">
          <p>
            <strong>Name:</strong> {props.source.name}
          </p>
          <p>
            <strong>Connection Type:</strong> {props.source.connection_type}
          </p>
          <p>
            <strong>Logo URL:</strong> {props.source.logoURL}
          </p>
          <p>
            <strong>ID:</strong> {props.source.id}
          </p>
        </div>
      </Panel>
      <Panel header="Target" key="4">
        <div className="ms-2">
          <p>
            <strong>Name:</strong> {props.target.name}
          </p>
          <p>
            <strong>Connection Type:</strong> {props.target.connection_type}
          </p>
          <p>
            <strong>Logo URL:</strong> {props.target.logoURL}
          </p>
          <p>
            <strong>ID:</strong> {props.target.id}
          </p>
        </div>
      </Panel>
    </Collapse>
  );
};

export default DropDown;
