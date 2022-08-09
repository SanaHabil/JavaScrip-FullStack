import React from "react";
import styles from '../static/Base.module.css';

const Base = (props) =>{
    return (
        <div className={styles.container}>
            <h1> Home Page</h1>
            {props.children}
        </div>
    );
};
export default Base;