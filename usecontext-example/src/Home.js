import React from "react";
import LocaleContext from './LocaleContext'

const Home = () => {
	return (
		<LocaleContext.Consumer>
			{
				(value) => {
					const { locale } = value
					return (
						<>
						{ locale === 'en' && <h1>Home En</h1>}
						{ locale === 'es' && <h1>Home Es</h1>}
						</>
					)
				}
			}
		</LocaleContext.Consumer>
	);
};

export default Home;
