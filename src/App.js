import React, { useState } from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import db, {
  firebaseConfig as config,
  firebaseApp as firebaseAppInstance,
} from "./FIREBASE_CONFIG.js";
import { Box, Button } from "@mui/material";
import { PostList } from "./components/Posts/PostList.js";
import { CreatePost } from "./components/Posts/CreatePost.js";
import { EditPost } from "./components/Posts/EditPost.js";
import { UserShow } from "./components/Users/ShowUser.js";
import { UsersListLibrarian } from "./components/Users/UserListLibrarian.js";
import { EditUser } from "./components/Users/EditUser.js";
import { UsersListAdmin } from "./components/Users/UserListAdmin.js";
import { CreateUser } from "./components/Users/CreateUser.js";
import { AdminEdit } from "./components/Users/AdminEdit.js";
import { UsersListMember } from "./components/Users/UsersListMember.js";

const options = {
  app: firebaseAppInstance,
  persistence: "session",
};

const dataProvider = FirebaseDataProvider(config, options);

const authProvider = FirebaseAuthProvider(config, options);

function App() {
  const [role, setRole] = useState("");

  const handleClick = (e) => {
    const result = e.target.value;
    setRole(result);
  };
  console.log(role);

  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="posts"
          list={PostList}
          create={CreatePost}
          edit={EditPost}
        />

        {role === "librarian" ? (
          <Resource
            name="users"
            show={UserShow}
            list={UsersListLibrarian}
            edit={EditUser}
          />
        ) : (
          <></>
        )}
        {role === "admin" ? (
          <Resource
            name="users"
            show={UserShow}
            list={UsersListAdmin}
            create={CreateUser}
            edit={AdminEdit}
          />
        ) : (
          <></>
        )}
        {role === "member" ? (
          <Resource name="users" show={UserShow} list={UsersListMember} />
        ) : (
          <></>
        )}
        {role === "" ? (
          <Resource
            name="users"
            show={UserShow}
            list={UsersListAdmin}
            create={CreateUser}
            edit={EditUser}
          />
        ) : (
          <></>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            position: "absolute",
            top: "70px",
            zIndex: 10,
            left: "250px",
            overflow: "auto",
            width: "300px",
          }}
        >
          <Button
            variant="contained"
            value={"member"}
            onClick={(e) => handleClick(e, "value")}
          >
            Member
          </Button>
          <Button
            variant="contained"
            value={"librarian"}
            onClick={(e) => handleClick(e, "value")}
          >
            Librarian
          </Button>
          <Button
            variant="contained"
            value={"admin"}
            onClick={(e) => handleClick(e, "value")}
          >
            Admin
          </Button>
        </Box>
      </Admin>
    </>
  );
}

export default App;
