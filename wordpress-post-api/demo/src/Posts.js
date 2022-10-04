import React, { useEffect, useState, memo } from "react";
import getPosts from "./mock-wordpress-api/mock-wordpress-api";
import classes from "./Posts.module.css";


function Posts() {
  const [loadedPosts, setLoadedPosts] = useState(null);
  useEffect(() => {
    // usually you would fetch here
    getPosts()
      .then((returnedPosts) => {
        setLoadedPosts(returnedPosts);
      })
      .catch((err) => {
        alert(err);
      });
  });
  return (
    <div className={classes.postsContainer}>
      {loadedPosts === null
        ? ""
        : loadedPosts.map((post, index) => {
            return (
              <div key={index} className={classes.postContainer}>
                <img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post._embedded["wp:featuredmedia"][0].alt_text}/>
                <div className={classes.postInfoContainer}>
                    <h2>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={ {__html: post.excerpt.rendered} } />
                    <a href={post.link}>View This Story</a>
                </div>
              </div>
            );
          })}
    </div>
  );
}
export default memo(Posts);
