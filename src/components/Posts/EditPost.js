import React from "react";
import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const EditPost = (props) => {
  return (
    <Edit title="Edit The Post" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput source="publishedAt" label="Published" />
      </SimpleForm>
    </Edit>
  );
};
