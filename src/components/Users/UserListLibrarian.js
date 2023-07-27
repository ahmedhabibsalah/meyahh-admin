import React from "react";
import {
  BooleanField,
  Datagrid,
  EditButton,
  EmailField,
  List,
  TextField,
  useRecordContext,
} from "react-admin";

const Button = ({ path }) => {
  const record = useRecordContext();

  return (
    <>
      {" "}
      {record.role !== "admin" ? (
        <EditButton basePath={path} record={{ id: record.id }} />
      ) : (
        <></>
      )}
    </>
  );
};

export const UsersListLibrarian = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="role" />

        <BooleanField label="Activity" source="active" />
        <Button path="/users" />
      </Datagrid>
    </List>
  );
};
