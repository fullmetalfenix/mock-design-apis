# Mock Design API's

Mock API calls to commonly used actual API's for use in building a functional UI.

This project has been done to attempt to help facilitate the hand off of a frontend project to a backend developer (and vice-versa). I have done some work in both capacities and have come to find that often times when you build a prototype for a frontend for an App or website, once the backend is built out, you have to make adjustments to the design to accommodate for the data (and vice-versa). I am hoping to continue to build this repo out as a library providing mock API’s, done through JavaScript promises, of .json objects returned from commonly consumed API endpoints that follow the schema you would get if you were actually making a call to that API. The thought is that if you want to start building an application or website that will be making use of one of these API’s you can plug one of these modules into your frontend project to get data in the same format / structure you would be if you were actually fetching from said API, so when you want to plug in a backend it should be as easy as swapping out this file for an actual fetch. 

 

To use these Mock API Objects: 

1. Take the *-mock-api.js file and drop it in your project (example: in create-react-apps src folder). 

2.   Set the 'latency' variable in the *-mock-api.js file to whatever you think the latency should be – this is to simulate the network call time to the actual API so you can account for handling it in your design 

3. import the exported function from that file wherever you would usually fetch() the actual API's data - the data returned here should be in the same structure you will recieve it from the API it is based on. 

ex: 

            const [loadedData, setLoadedData] = useState(null); 
            useEffect(() => { 
                // usually you would fetch here 
                <whatever-function>() 
                .then((returnedData) => { 
                    setLoadedPosts(returnedPosts); 
                }) 
                .catch((err) => { 
                    alert(err); 
                }); 
            }); 

 
