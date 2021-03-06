import React, { useState } from "react";

import { AddUser } from "./Components/Users/AddUser";
import { UserList } from "./Components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </div>
    );
}

export default App;
