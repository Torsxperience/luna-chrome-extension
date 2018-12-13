import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './Main.css';
import icon from "../../assets/atom.svg";
import Watermark from '../Watermark/Watermark';

const uiStyles = theme => ({
    btn: {
        marginTop: 10,
        marginBottom: 10
    },
});

class Main extends Component {
    handleAction(){
        if(!this.props.isLoggedIn) {
            window.open("./login.html");
        }
    }
    render() {
        const { classes } = this.props;

        return (
            <main className={styles.container}>
                <div className={styles.header}>
                    <img className={styles.logo} src={icon} width={30} height={30}></img>
                </div>

                <Button className={classes.btn} color="primary"
                    variant="outlined"
                    onClick={() => this.handleAction()}
                    size="large">
                    {
                        this.props.isLoggedIn ? "Connect" : "Login"
                    }
                </Button>

                {this.props.isLoggedIn ?
                    <p>Logged in as <a href="#">au00042</a> | <a onClick={() => this.props.history.push("/dashboard")} href="#"> Logout</a> or  <a href="#">Switch</a></p>
                    : 
                    <p>You aren't logged in! Click login to get started...</p>
                }
                <hr width={80}></hr>

                <Watermark />
            </main>);
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(uiStyles)(Main);
