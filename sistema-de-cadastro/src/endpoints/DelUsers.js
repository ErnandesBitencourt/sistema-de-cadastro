import React from "react";
import axios from "axios";
import { deletUsers } from "../componets/Url";


export const DelUsers = (id) => {

  axios
  .delete (`${deletUsers}/${id}`)
  .then(()=>alert("Excluido com sucesso!"))
  .catch(()=>alert("Error ao excluir"))
};