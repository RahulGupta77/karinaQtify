import React from "react";
import LogoImg from "../../assets/logo.png";
import styles from "./Logo.module.css";

const Logo=()=>{

return(
    <div className={styles.logoDiv}>
        <img src={LogoImg} width={67} alt="logo"/>
    </div>
)
};

export default Logo;