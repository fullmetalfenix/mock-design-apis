import './App.css';

import NavWrappedExample from './Components/Nav'
import TopBar from './Components/TopBar';
import {PrimaryButton } from '@fluentui/react/lib/Button';
import getUserInfo from './mock-msal-userinfo-api/mock-msal-userinfo-api'
import { useState } from 'react';



function App() {
  const [profileInfo, setProfileInfo] = useState(null)

  function _loadProfile(){
    getUserInfo()
    .then((returnedProfileInfo)=> {  
      setProfileInfo(returnedProfileInfo);
    }).catch((err) => {
      alert(err);
    });
  
  }
  

  return (
    <div className="App">
      <TopBar profile={profileInfo}/>
      <div style={{display: 'flex', alignItems: 'stretch'}}>
      <NavWrappedExample profileInfo={profileInfo}/>
      <div style={{ minHeight: '100vh', background: 'lightgray',width: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
        {!profileInfo ? <PrimaryButton text="Load Profile Info" onClick={_loadProfile} allowDisabledFocus  />: '' }
        {profileInfo?<p>Buisness Phone: {profileInfo.businessPhones[0]}</p> : ""}
        {profileInfo?<p>Mobile Phone: {profileInfo.mobilePhone}</p>: ""}
        {profileInfo?<p>Office Location: {profileInfo.officeLocation}</p>: ""}
      </div>
      </div>
    </div>
  );
}

export default App;
