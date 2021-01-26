import React, { useState, useMemo } from "react";
import LocaleContext from "./LocaleContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";

export default function App() {
  const [locale, setLocale] = useState("en");

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === "en" ? "es" : "en";
    });
  };

  const value = useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  return (
    <Router>
      <div className="App">
        <LocaleContext.Provider value={value}>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </LocaleContext.Provider>
      </div>
    </Router>
  );
}