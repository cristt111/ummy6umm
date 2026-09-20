/* ============================================================================
 *  META PIXEL CONFIG — THIS IS THE ONLY FILE YOU EDIT TO CHANGE YOUR PIXEL.
 *
 *  Easiest way:   double-click SET_PIXEL.bat   (or run: npm run pixel -- <ID>)
 *  Manual way:    paste the ID between the quotes below.
 *
 *  Rotating / using several pixels? List them all, separated by commas:
 *      ['1111111111111111', '2222222222222222']
 *
 *  Leave the list empty to turn tracking off completely.
 *  This file is copied to the website as-is, so you can also edit it directly
 *  in your GitHub repo (or in the uploaded files) without rebuilding anything.
 * ========================================================================== */

window.__PIXEL_CONFIG__ = {
  // Your Meta pixel / dataset ID goes here.
  pixelIds: ['1021640984251878'],

  // false = click-only. Nothing is sent, and nothing is even loaded from
  //         Meta, until a visitor clicks one of the buttons.
  // true  = also report every page visit as a PageView.
  trackPageView: true,

  // Which Meta event each button reports.
  // 'Lead' is the one to pick as your conversion in Ads Manager.
  events: {
    pageView: 'PageView',
    telegramClick: 'Lead',
    websiteClick: 'ViewContent',
  },

  // Set to true to print every fired event in the browser console.
  // You can also just add ?pixeldebug=1 to the page URL.
  debug: false,
};
