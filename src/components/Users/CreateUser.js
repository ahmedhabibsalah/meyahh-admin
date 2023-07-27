import React from "react";
import {
  BooleanInput,
  Create,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CreateUser = (props) => {
  return (
    <Create {...props} title="Create a New User">
      <SimpleForm>
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
        <BooleanInput label="Activity" source="active" />
      </SimpleForm>
    </Create>
  );
};
