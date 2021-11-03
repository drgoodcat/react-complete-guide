import React from "react";

import classes from "./Button.module.css";

export const Button = (props) => {
    return (
        <div className={classes.button} type={props.type || "button"} onCLick={props.onCLick}>
            {props.children}
        </div>
    );
};
