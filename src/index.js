import React, { Component } from "react";
import ReactDOM from "react-dom";
import JobsList from "./components/jobsList";
import * as serviceWorker from "./serviceWorker";
import messages from "./locale/messages"
import { IntlProvider } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';

  const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  "en-US";

ReactDOM.render(
  
  <IntlProvider locale={locale} messages={messages[locale]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
