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

[Pretty SFDC URL](javascript:void function()%7Bfunction e(e)%7Be%3De.split("%2B").join(" ")%3Bfor(var t,r%3D%7B%7D,n%3D/%5B%3F%26%5D%3F(%5B%5E%3D%5D%2B)%3D(%5B%5E%26%5D*)/g%3Bt%3Dn.exec(e)%3B)r%5BdecodeURIComponent(t%5B1%5D)%5D%3DdecodeURIComponent(t%5B2%5D)%3Breturn r%7Dfunction t(e)%7Bvar t,r,n,i,o%3D%7B%7D,d%3D0,a%3D0,f%3D"",c%3DString.fromCharCode,s%3De.length,l%3D"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%2B/"%3Bfor(t%3D0%3B64>t%3Bt%2B%2B)o%5Bl.charAt(t)%5D%3Dt%3Bfor(n%3D0%3Bs>n%3Bn%2B%2B)for(r%3Do%5Be.charAt(n)%5D,d%3D(d<<6)%2Br,a%2B%3D6%3Ba>%3D8%3B)((i%3Dd>>>(a-%3D8)%26255)%7C%7Cs-2>n)%26%26(f%2B%3Dc(i))%3Breturn f%7Dfunction r(e)%7Breturn e%26%26(15%3D%3De.length%26%26/%5Ba-zA-Z0-9%5D%7B15%7D/.test(e)%7C%7C18%3D%3De.length%26%26/%5Ba-zA-Z0-9%5D%7B18%7D/.test(e))%7Dfunction n(n)%7Bvar i%3Bif(~n.origin.indexOf("lightning"))%7Bvar o%3Dn.href.split("/"),d%3Do.indexOf("r"),a%3Do.indexOf("sObject"),f%3Do.indexOf("alohaRedirect")%3Bif(d>0)i%3Do%5Bd%2B1%5D%3Belse if(a>0)i%3Do%5Ba%2B1%5D%3Belse if(f>0)i%3Do%5Bf%2B1%5D.split("%3F")%5B0%5D%3Belse try%7Bvar c%3DJSON.parse(t(decodeURIComponent(n.hash.substr(1))))%3Bvoid 0!%3Dc.attributes.feedElementId%26%26(i%3Dc.attributes.feedElementId)%7Dcatch(s)%7Breturn"failed to parse encoded json for "%2Bn.href%7D%7Delse%7Bvar l%3De(document.location.search)%3Bvoid 0!%3Dl.id%3Fi%3Dl.id:void 0!%3Dl.fId%3Fi%3Dl.fId:void 0!%3Dl.scrumteamid%3Fi%3Dl.scrumteamid:void 0!%3Dl.g%3Fi%3Dl.g:void 0!%3Dl.u%26%26(i%3Dl.u)%7Dif(!r(i))return null%3Bvar u%3Dn.origin.replace(".lightning.force.com",".my.salesforce.com")%3Breturn u%2B"/"%2Bi%7Dvar i%3Dn(window.location)%3Bwindow.prompt("Entity URL",i)%7D()%3B)

