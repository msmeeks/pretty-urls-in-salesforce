# pretty-urls-in-salesforce
Automatically convert Salesforce URLs to the pretty and short format in Lightning Experience

## User Scrupt

The user script version will run periodically to replace all the URLs on any Lightning Experience page.

### Installation

1. Install a user script tool, like [Tampermonkey](https://tampermonkey.net), if you don't already have one installed in your browser.
2. Paste the code from pretty-urls-in-salesforce.user.js into a new user script following the instructions for your browsers user script tool to set up a new script.

## Bookmarklet

The bookmarklet will replace all the URLs on any Lightning Experience page, but will only run when you click on it.

### Installation

1. Make sure your bookmark bar is visible.
2. Drag the following link into your bookmark bar.

[Pretty SFDC URLs](javascript:void%20function(){var%20e=e||{getQueryParams:function(e){e=e.split(%22+%22).join(%22%20%22);for(var%20t,r={},i=/[%3F%26]%3F([^=]+)=([^%26]*)/g;t=i.exec(e);)r[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return%20r},decodeBase64:function(e){var%20t,r,i,o,n={},d=0,a=0,c=%22%22,s=String.fromCharCode,f=e.length,l=%22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/%22;for(t=0;64%3Et;t++)n[l.charAt(t)]=t;for(i=0;f%3Ei;i++)for(r=n[e.charAt(i)],d=(d%3C%3C6)+r,a+=6;a%3E=8;)((o=d%3E%3E%3E(a-=8)%26255)||f-2%3Ei)%26%26(c+=s(o));return%20c},isValidId:function(e){return%20e%26%26(15==e.length%26%26/[a-zA-Z0-9]{15}/.test(e)||18==e.length%26%26/[a-zA-Z0-9]{18}/.test(e))},convertUrl:function(t){var%20r;if(~t.origin.indexOf(%22lightning%22)){var%20i=t.href.split(%22/%22),o=i.indexOf(%22r%22),n=i.indexOf(%22sObject%22),d=i.indexOf(%22alohaRedirect%22);if(o%3E0)r=i[o+1];else%20if(n%3E0)r=i[n+1];else%20if(d%3E0)r=i[d+1].split(%22%3F%22)[0];else%20try{var%20a=JSON.parse(e.decodeBase64(decodeURIComponent(t.hash.substr(1))));void%200!=a.attributes.feedElementId%26%26(r=a.attributes.feedElementId)}catch(c){return%22Unable%20to%20parse%20URL%22}}else{var%20s=e.getQueryParams(document.location.search);void%200!=s.id%3Fr=s.id:void%200!=s.fId%3Fr=s.fId:void%200!=s.scrumteamid%3Fr=s.scrumteamid:void%200!=s.g%3Fr=s.g:void%200!=s.u%26%26(r=s.u)}if(!e.isValidId(r))return%22No%20valid%20object%20ID%20found%22;var%20f=t.origin.replace(%22.lightning.force.com%22,%22.my.salesforce.com%22);return%20f+%22/%22+r}},t=e.convertUrl(window.location);window.prompt(%22Entity%20URL%22,t)}();)

