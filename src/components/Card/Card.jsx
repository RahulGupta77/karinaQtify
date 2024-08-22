import { Chip, Tooltip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

function Card({ data, type }) {
  return type === "album" ? (
    <Tooltip title={`${data.songs?.length} songs`} placement="top" arrow>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={data.image} alt="album" />
          <div className={styles.banner}>
            <Chip
              label={`${data.follows} Follows`}
              className={styles.chip}
              size="small"
            />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{data.title}</p>
        </div>
      </div>
    </Tooltip>
  ) : type === "song" ? (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={data.image} alt="album" loading="lazy" />
        <div className={styles.banner}>
          
            <Chip
              label={`${data.likes} Follows`}
              className={styles.chip}
              size="small"
            />
         
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{data.title}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Card;
