import React from "react";
import { Create, DateInput, SimpleForm, TextInput } from "react-admin";

export const CreatePost = (props) => {
  return (
    <Create {...props} title="Create a New Post">
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput source="publishedAt" label="Published" />
      </SimpleForm>
    </Create>
  );
};
