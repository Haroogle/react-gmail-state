import { useState } from "react";
import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [readEmails, setReadEmails] = useState([]);
  const [hideRead, setHideRead] = useState(false);
  const toggleRead = (email) => {
    // Store the return filter of emails without the email
    const newEmails = emails.map((targetEmail) => {
      if (targetEmail === email) {
        return { ...email, read: !email.read };
      }
      return targetEmail;
    });
    setEmails(newEmails);

    // setEmails to have new updated Read value in the emails list
  };

  const toggleStar = (email) => {
    const newEmails = emails.map((targetEmail) => {
      if (targetEmail === email) {
        return { ...email, starred: !email.starred };
      }
      return targetEmail;
    });

    setEmails(newEmails);
  };
  const asignHideRead = () => {
    setHideRead(!hideRead);
    setReadEmails();
  };
  const getReademails = () => {
    const listOfReadEmails = emails.filter((email) => email.read !== true);

    setReadEmails(listOfReadEmails);
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
              checked={hideRead}
              onChange={() => {
                asignHideRead();
                getReademails();
              }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}

        {hideRead &&
          readEmails.map((email) => (
            <li className="email unread" key={email.id}>
              <div className="select">
                <input className="select-checkbox" type="checkbox" />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        {!hideRead &&
          emails.map((email) => (
            <li
              className={email.read ? "email read" : " email unread"}
              key={email.id}
            >
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
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
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
