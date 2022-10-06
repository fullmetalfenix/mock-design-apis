// This is the info that is returned from your account when logging into a site configured with MSAL - as described here:
// https://learn.microsoft.com/en-us/azure/active-directory/develop/single-page-app-quickstart?pivots=devlang-react
// Usually the call would go out to Azure AD, get an new access token (you would already be logged in by now) then use it to make a call to an ms graph endpoint for your profile info. If you are going to use something like Passport.js as an auth/auth framework it will be very similar as far as the structure of the account data returned.

const userInfo = {
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",
    "displayName": "John Smith",
    "surname": "Smith",
    "givenName": "John",
    "id": "<id>",
    "userPrincipalName": "John@smith.dev",
    "businessPhones":[
        "+1 555555555"
    ],
    "jobTitle": 'Programmer',
    "mail": null,
    "mobilePhone": "+1 2222222",
    "officeLocation": "Concern, Nonya",
    "preferredLanguage": null
}

const latency = 2000;
export default function getUserInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{resolve(userInfo);}, latency )      
      })  
}
