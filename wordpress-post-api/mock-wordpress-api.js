const posts = [
    {
        "link": "http://<link-to-article-here>.com/2022/09/15/post-number-three/",
        "title": {
            "rendered": "Post Number Three"
        },
        "excerpt": {
            "rendered": "<p>Donec venenatis a orci ut ornare. Nullam sed justo nulla. Nullam condimentum quam id condimentum maximus. Aenean eleifend laoreet velit eu porta. In vulputate in orci ac lacinia. Etiam vel sodales est. In hac habitasse platea dictumst. Proin augue mauris, auctor consectetur erat et, viverra posuere sem. Vestibulum vel vehicula ipsum. Maecenas ultricies quis dui [&hellip;]</p>\n",
        },
        "_embedded": {
            "wp:featuredmedia": [
                {
                    "alt_text": "Forest",
                    "source_url": "http://localhost:3000/img/forest.jpg",
                }
            ]
        }
    },
    {
        "link": "http://yoursite.com/2022/09/15/post-number-two/",
        "title": {
            "rendered": "Post Number Two"
        },
        "excerpt": {
            "rendered": "<p>Pellentesque mauris ante, ultrices ut nulla sit amet, sodales tempus nibh. Aliquam est lacus, rhoncus eget diam eu, pulvinar hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus quam, sagittis et pretium sit amet, placerat efficitur ex. Phasellus aliquet efficitur mauris, non rhoncus enim vulputate sit amet. Nunc [&hellip;]</p>",
        },
        "_embedded": {
            "wp:featuredmedia": [
                {
                    "alt_text": "Forest",
                    "source_url": "http://localhost:3000/img/snow.jpg",
                }
            ]
        }
    },
    {
        "link": "http://yoursite.com/2022/09/15/post-number-one/",
        "title": {
            "rendered": "Post Number One"
        },
        "excerpt": {
            "rendered": "<p>Donec venenatis a orci ut ornare. Nullam sed justo nulla. Nullam condimentum quam id condimentum maximus. Aenean eleifend laoreet velit eu porta. In vulputate in orci ac lacinia. Etiam vel sodales est. In hac habitasse platea dictumst. Proin augue mauris, auctor consectetur erat et, viverra posuere sem. Vestibulum vel vehicula ipsum. Maecenas ultricies quis dui [&hellip;]</p>",
        },
        "_embedded": {
            "wp:featuredmedia": [
                {
                    "alt_text": "Beach",
                    "source_url": "http://localhost:3000/img/beach.jpg",
                }
            ]
        }
    }
]

const latency = 2000;
export default function getPosts(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{resolve(posts);}, latency )      
      })  
}
