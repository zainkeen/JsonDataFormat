import { PageHeader } from "antd";
import React from "react";
import Card from "../Components/mainCard";

import data from "./Sample.json";
const MainPage = () => {
  // let data = "data/sample.json";
  return (
    <div className="mainPage">
      {/* {console.log("Main data is ", data)} */}
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Main Screen"
        subTitle="Manage Data"
      />
      {data.map((element, index) => (
        <Card data={element} key={index} />
      ))}
    </div>
  );
};

export default MainPage;
