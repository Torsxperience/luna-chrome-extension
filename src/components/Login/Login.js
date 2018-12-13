import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
// import TextInput from "@material-ui/core/TextInput";
import styles from "./Login.css";

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        }
    }
    render(){
        return(
            <div className={styles.container}>
                <Button>
                    Login
                </Button>
            </div>
        );
    }
}