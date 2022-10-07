const tweets = {
    "data": [
      {
        "author_id": "1",
        "text": "test with tags #test  #testing",
        "id": "<tweet-id>",
        "edit_history_tweet_ids": [
          "<one-tweets-history>"
        ]
      },
      {
        "author_id": "1",
        "text": "test with a link https://t.co/rWsq2TJ1PX",
        "id": "<tweet-id>",
        "edit_history_tweet_ids": [
          "<one-tweets-history>"
        ]
      },
      {
        "author_id": "1",
        "attachments": {
          "media_keys": [
            "3_1577476950981050369"
          ]
        },
        "text": "test with a pic https://t.co/Hd6KYmT0ak",
        "id": "<tweet-id>",
        "edit_history_tweet_ids": [
          "<one-tweets-history>"
        ]
      },
      {
        "author_id": "1",
        "text": "newest test",
        "id": "<tweet-id>",
        "edit_history_tweet_ids": [
          "<one-tweets-history>"
        ]
      },
      {
        "author_id": "1",
        "text": "new test",
        "id": "<tweet-id>",
        "edit_history_tweet_ids": [
          "<one-tweets-history>"
        ]
      }
    ],
    "includes": {
      "users": [
        {
          "username": "Username",
          "id": "1",
          "description": "",
          "name": "John Smith",
          "profile_image_url": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
        }
      ],
      "media": [
        {
          "media_key": "3_1577476950981050369",
          "type": "photo",
          "url": "../img/beach-img.jpg"
        }
      ]
    },
    "meta": {
      "result_count": 5,
      "newest_id": "1577478577364369408",
      "oldest_id": "1577476476022112257",
      "next_token": "7140dibdnow9c7btw423i1nxf6kgykfv8kzylve2390dz"
    }
  }

const latency = 2000;
export default function getTweets(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{resolve(tweets);}, latency )      
      })  
}
