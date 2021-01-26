import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "./LocaleContext";

const EnglishNav = ({ toggleLocale }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>Español</button>
    </nav>
  );
};

const SpanishNav = ({ toggleLocale }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>English</button>
    </nav>
  );
};

const Nav = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <>
      {locale === "en" && <EnglishNav toggleLocale={toggleLocale} />}
      {locale === "es" && <SpanishNav toggleLocale={toggleLocale} />}
    </>
  );
};

export default Nav;
