let dataLayer;
function gtag(...args) {
  dataLayer = dataLayer || [];
  dataLayer.push(args);
}
gtag('js', new Date());

gtag('config', 'UA-214412358-2');
