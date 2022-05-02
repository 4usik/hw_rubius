import React from "react";
import { useService } from "../ServiceContext";

export function BuildServiceSelect({ data }) {
  const { name } = data;

  return (
    <option>{name}</option>
  );
}