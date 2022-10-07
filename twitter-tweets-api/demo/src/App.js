import { useEffect, useState } from "react";
import "./App.css";
import getTweets from "./mock-twitter-api/mock-twitter-api";
import Tweet from "./Tweet";

function App() {
  const [calledTweets, setCalledTweets] = useState({ data: [] });
  useEffect(() => {
    // usually a fetch would go here
    getTweets().then((tweets) => setCalledTweets(tweets));
  }, []);


  return (
    <div className="App">
      {calledTweets.data.map((tweetData, index) => {
      var image = '';
      if("attachments" in tweetData){
          image = calledTweets.includes.media.find((obj)=>{return obj.media_key === tweetData.attachments.media_keys[0] })
        }
        return (
          <Tweet
            key={index}
            tweetData={tweetData}
            attachments={tweetData.attachments}
            author={calledTweets.includes.users[0].name}
            userName={calledTweets.includes.users[0].username}
            userPic={calledTweets.includes.users[0].profile_image_url}
            image={image.url}
          />
        );
      })}
    </div>
  );
}

export default App;
