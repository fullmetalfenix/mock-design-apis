import React from "react";
import classes from "./Tweet.module.css";

export default function Tweet({ tweetData, author, userName, userPic, attachments, image }) {
  return (
    <div className={classes.tweetContainer}>
      <div className={classes.imageContainer}>
        <img alt="profile" src={userPic} />
      </div>
      <div className={classes.messageBody}>
        <div>
          <span><a className={classes.author} href={`https://twitter.com/${userName}`}>{author}</a> </span>
          <span><a className={classes.username} href={`https://twitter.com/${userName}`}>@{userName}</a></span>
        </div>
        <p>{tweetData.text}</p>
        {image !== '' ? <img className={classes.embeddedImg} src={image} /> : ''}

      </div>
    </div>
  );
}
