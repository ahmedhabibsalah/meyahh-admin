import React from "react";
import {
  Edit,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const EditUser = (props) => {
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
      </SimpleForm>
    </Edit>
  );
};
