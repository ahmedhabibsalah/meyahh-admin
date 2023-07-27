import React from "react";
import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  TextField,
} from "react-admin";

export const UsersListMember = (props) => {
  return (
    <List filter={{ role: "member", active: true }} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="role" />
        <BooleanField label="Activity" source="active" />
      </Datagrid>
    </List>
  );
};
