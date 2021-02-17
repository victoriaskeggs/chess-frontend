import { ReportHandler } from 'web-vitals';

/**
 * Reports web performance when passed an appropriate logging function.
 * 
 * @param onPerfEntry function which takes and logs a {@link Metric}
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			// Cumulative Layout Shift (CLS) measures the sum total of all individual layout shift scores for 
			// every unexpected layout shift that occurs during the entire lifespan of the page. A layout shift 
			// occurs any time a visible element changes its position from one rendered frame to the next.
			getCLS(onPerfEntry);

			// First Input Delay (FID) is an important, user-centric metric for measuring load responsiveness 
			// because it quantifies the experience users feel when trying to interact with unresponsive pages—a 
			// low FID helps ensure that the page is usable.
			getFID(onPerfEntry);

			// First Contentful Paint (FCP) measures how long it takes the browser to render the first piece of 
			// DOM content after a user navigates to your page. Images, non-white <canvas> elements, and SVGs on 
			// your page are considered DOM content; anything inside an iframe isn't included.
			getFCP(onPerfEntry);

			// Largest Contentful Paint (LCP) is an important, user-centric metric for measuring perceived load 
			// speed because it marks the point in the page load timeline when the page's main content has likely 
			// loaded—a fast LCP helps reassure the user that the page is useful.
			getLCP(onPerfEntry);

			// Time To First Byte (TTFB) is the parameter used to measure the reactivity of a web server or 
			// another network resource. It is calculated by counting the time between a HTTP (or HTTPS) client 
			// request and the receipt of the first web page byte.
			getTTFB(onPerfEntry);
		});
	}
};

export default reportWebVitals;
