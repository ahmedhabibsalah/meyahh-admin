import {
  BooleanField,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
      <BooleanField label="Active-Status" source="active" />
    </SimpleShowLayout>
  </Show>
);
