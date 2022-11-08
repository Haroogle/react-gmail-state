import { useState } from "react";
import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);

  const toggleRead = (email) => {
    console.log("Read");

    // Store the return filter of emails without the email
    const newEmails = emails.map((targetEmail) => {
      if (targetEmail === email) {
        return { ...email, read: !email.read };
      }
      return targetEmail;
    });
    setEmails(newEmails);
    console.log(newEmails);

    // setEmails to have new updated Read value in the emails list
  };

  const toggleStar = () => {
    console.log("Stared");
  };

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
              //checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
        {emails.map((email) => (
          <li className={email.read ? "read" : "unread"} key={email.id}>
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                //checked={email.starred}
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
