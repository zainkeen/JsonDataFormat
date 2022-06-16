import React from "react";
import { Card, message } from "antd";
import DropDown from "./dropDown";
import PipelineModel from "./pipelineModel";
import { useDispatch } from "react-redux";
import { addData } from "../Utils/Actions";
const MainCard = (props) => {
  const { Meta } = Card;

  const dispatch = useDispatch();

  const toLocalStrorage = (key, value) => {
    let data = JSON.stringify(value);
    localStorage.setItem(key, data);
    message.success("Added Success");
  };

  return (
    <Card hoverable style={{ width: "90%" }} className="ms-5 mt-4">
      {console.log("Card props are ", props.data)}
      <Meta title={`Name: ${props.data.name}`} />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-4">
            <DropDown
              createdBy={props.data.created_by}
              updatedBy={props.data.updated_by}
              source={props.data.source}
              target={props.data.target}
            />
          </div>
          <div className="col-lg-8">
            <ol className="listData gradient-list">
              <li className="listData-item">
                <div className="mt-2">
                  <strong>id: </strong>
                  <p className="ps-3">{props.data.id}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Batch Processed: </strong>{" "}
                  <p className="ps-3">{props.data.batchprocessed}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Pipeline Processed: </strong>
                  <p className="ps-3">{props.data.pipelineprocessed}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Record Processed: </strong>
                  <p className="ps-3">{props.data.recordprocessed}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Created At: </strong>
                  <p className="ps-3">{props.data.created_at}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Updated At: </strong>
                  <p className="ps-3">{props.data.updated_at}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Status: </strong>
                  <p className="ps-3">{props.data.status}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Version: </strong>
                  <p className="ps-3">{props.data.version}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Start At: </strong>
                  <p className="ps-3">{props.data.startAt}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>End At: </strong>
                  <p className="ps-3">{props.data.endAt}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Last Execute At: </strong>
                  <p className="ps-3">{props.data.lastExecuteAt}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Next Execute At: </strong>
                  <p className="ps-3">{props.data.nextExecuteAt}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Frequency: </strong>
                  <p className="ps-3">{props.data.frequency}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Source id: </strong>
                  <p className="ps-3">{props.data.sourceId}</p>
                </div>
              </li>
              <li className="listData-item">
                <div className="mt-2">
                  <strong>Target id: </strong>
                  <p className="ps-3">{props.data.targetId}</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="controller-container">
          <PipelineModel data={props.data.pipeline} name={props.data.name} />
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              toLocalStrorage(props.data.name, props.data);
            }}
          >
            Add to Local Stroage
          </button>
          <button
            type="button"
            className="btn btn-outline-danger "
            onClick={() => {
              localStorage.removeItem(props.data.name);
              message.error("Deleted");
            }}
          >
            Remove from Local Stroage
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => dispatch(addData(JSON.stringify(props.data)))}
          >
            ADD to Redux
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MainCard;
