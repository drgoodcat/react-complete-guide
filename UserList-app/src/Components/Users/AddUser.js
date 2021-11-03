import React from "react";

import classes from "./AddUser.module.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

export const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};
