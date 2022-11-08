import { useState } from "react";
import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);

  const toggleRead = (email) => {
    console.log("Read")

    // get an old array, remove the email we are talking about from it
    const oldEmails = emails.filter((iteratedEmail) => iteratedEmail.id !== email.id )
    
    setEmails([...oldEmails, {...email, read: !email.read}])
  }

  const toggleStar = () => {
    console.log("Stared")
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
        {emails.map((email, index) => (
          <li className="email" key={index}>
            <div className="select">
              <input 
                className="select-checkbox" 
                type="checkbox" 
                checked={email.read}
                onChange={(email) => toggleRead(email)}/>
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={toggleStar}
              />
            </div>
            <div className="sender"> {email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        ))}
      </main>
    </div>
  );
}

export default App;
