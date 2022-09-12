import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ title, amount, color }) {
  return (
    <Statistic size="tiny" color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{title}:</Statistic.Label>
      <Statistic.Value style={{ textAlign: "left" }}>{amount}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
