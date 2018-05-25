# pretty-urls-in-salesforce
Automatically convert Salesforce URLs to the pretty and short format in Lightning Experience

## User Scrupt

The user script version will run periodically to replace all the URLs on any Lightning Experience page.

### Installation

1. Install a user script tool, like [Tampermonkey](https://tampermonkey.net), if you don't already have one installed in your browser.
2. Paste the code from pretty-urls-in-salesforce.user.js into a new user script following the instructions for your browsers user script tool to set up a new script.

## Bookmarklet

The bookmarklet will open a prompt with a pretty version of the current Lightning Experience page's URL.

### Installation

1. Make sure your bookmark bar is visible.
2. Create a new bookmark.
3. Name it Pretty SFDC URL.
4. Paste the following code into the URL field.

	javascript%3Avoid%20function%28%29%257Bfunction%20e%28e%29%257Be%253De.split%28%22%252B%22%29.join%28%22%20%22%29%253Bfor%28var%20t%2Cr%253D%257B%257D%2Cn%253D%2F%255B%253F%2526%255D%253F%28%255B%255E%253D%255D%252B%29%253D%28%255B%255E%2526%255D*%29%2Fg%253Bt%253Dn.exec%28e%29%253B%29r%255BdecodeURIComponent%28t%255B1%255D%29%255D%253DdecodeURIComponent%28t%255B2%255D%29%253Breturn%20r%257Dfunction%20t%28e%29%257Bvar%20t%2Cr%2Cn%2Ci%2Co%253D%257B%257D%2Cd%253D0%2Ca%253D0%2Cf%253D%22%22%2Cc%253DString.fromCharCode%2Cs%253De.length%2Cl%253D%22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%252B%2F%22%253Bfor%28t%253D0%253B64%3Et%253Bt%252B%252B%29o%255Bl.charAt%28t%29%255D%253Dt%253Bfor%28n%253D0%253Bs%3En%253Bn%252B%252B%29for%28r%253Do%255Be.charAt%28n%29%255D%2Cd%253D%28d%3C%3C6%29%252Br%2Ca%252B%253D6%253Ba%3E%253D8%253B%29%28%28i%253Dd%3E%3E%3E%28a-%253D8%29%2526255%29%257C%257Cs-2%3En%29%2526%2526%28f%252B%253Dc%28i%29%29%253Breturn%20f%257Dfunction%20r%28e%29%257Breturn%20e%2526%2526%2815%253D%253De.length%2526%2526%2F%255Ba-zA-Z0-9%255D%257B15%257D%2F.test%28e%29%257C%257C18%253D%253De.length%2526%2526%2F%255Ba-zA-Z0-9%255D%257B18%257D%2F.test%28e%29%29%257Dfunction%20n%28n%29%257Bvar%20i%253Bif%28~n.origin.indexOf%28%22lightning%22%29%29%257Bvar%20o%253Dn.href.split%28%22%2F%22%29%2Cd%253Do.indexOf%28%22r%22%29%2Ca%253Do.indexOf%28%22sObject%22%29%2Cf%253Do.indexOf%28%22alohaRedirect%22%29%253Bif%28d%3E0%29i%253Do%255Bd%252B1%255D%253Belse%20if%28a%3E0%29i%253Do%255Ba%252B1%255D%253Belse%20if%28f%3E0%29i%253Do%255Bf%252B1%255D.split%28%22%253F%22%29%255B0%255D%253Belse%20try%257Bvar%20c%253DJSON.parse%28t%28decodeURIComponent%28n.hash.substr%281%29%29%29%29%253Bvoid%200!%253Dc.attributes.feedElementId%2526%2526%28i%253Dc.attributes.feedElementId%29%257Dcatch%28s%29%257Breturn%22failed%20to%20parse%20encoded%20json%20for%20%22%252Bn.href%257D%257Delse%257Bvar%20l%253De%28document.location.search%29%253Bvoid%200!%253Dl.id%253Fi%253Dl.id%3Avoid%200!%253Dl.fId%253Fi%253Dl.fId%3Avoid%200!%253Dl.scrumteamid%253Fi%253Dl.scrumteamid%3Avoid%200!%253Dl.g%253Fi%253Dl.g%3Avoid%200!%253Dl.u%2526%2526%28i%253Dl.u%29%257Dif%28!r%28i%29%29return%20null%253Bvar%20u%253Dn.origin.replace%28%22.lightning.force.com%22%2C%22.my.salesforce.com%22%29%253Breturn%20u%252B%22%2F%22%252Bi%257Dvar%20i%253Dn%28window.location%29%253Bwindow.prompt%28%22Entity%20URL%22%2Ci%29%257D%28%29%253B

