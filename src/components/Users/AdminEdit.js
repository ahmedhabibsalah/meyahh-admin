import React from "react";
import {
  BooleanInput,
  Edit,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const AdminEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="email" />
        <PasswordInput source="password" />
        <SelectInput
          source="role"
          choices={[
            { id: "admin", name: "Admin" },
            { id: "librarian", name: "Librarian" },
            { id: "member", name: "Member" },
          ]}
        />
        <BooleanInput source="active" aria-label="Activity" />
      </SimpleForm>
    </Edit>
  );
};
