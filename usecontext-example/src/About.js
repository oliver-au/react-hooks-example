import React, {useContext} from "react";
import LocaleContext from './LocaleContext'


const About = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <>
      { locale === 'en' && <h1>About En</h1>}
      { locale === 'es' && <h1>About Es</h1>}
    </>
  )
};

export default About;
