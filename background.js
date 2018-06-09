'use strict';

const blockedLanguage = 'sv-se';
const targetLanguage = 'en-us';

const callback = (details) => ({
    redirectUrl: details.url.replace(blockedLanguage, targetLanguage)
});

const filter = { 
    urls: [
        '*://azure.microsoft.com/' + blockedLanguage + '*',
        '*://docs.microsoft.com/' + blockedLanguage + '*',
    ] 
};

chrome.webRequest.onBeforeRequest.addListener(callback, filter, ['blocking']);