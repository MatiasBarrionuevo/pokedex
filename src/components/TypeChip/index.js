import React from "react";
import { Chip } from "@mui/material";
import './styles.scss';
function TypeChip({type}) {
  return <Chip className={`capitalize typechip ${type.name}`} label={type.name} />;
}

export default TypeChip;