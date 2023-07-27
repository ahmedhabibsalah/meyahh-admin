import React from "react";

import {
  BooleanField,
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  TextField,
} from "react-admin";

export const UsersListAdmin = (props) => {
  return (
    <>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="role" />
          <BooleanField label="Activity" source="active" />
          <EditButton basePath="/users" />
          <DeleteButton basePath="/users" />
        </Datagrid>
      </List>
    </>
  );
};
