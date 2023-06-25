export const GTM_ID = 'GTM-PGS54HQ';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
export const gtmVirtualPageView = (rest) => {
  window.dataLayer?.push({
    event: "VirtualPageView",
    ...rest,
  });
};