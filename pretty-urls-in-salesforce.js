// ==UserScript==
// @name         SFDC Pretty URLs
// @namespace    github.com/msmeeks/pretty-urls-in-salesforce
// @version      0.1
// @description  Convert SFDC URLs to their short form in the Lightning Experience
// @author       msmeeks
// @match        https://*.lightning.force.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    function getQueryParams(qs) {
        qs = qs.split("+").join(" ");
        var params = {},
            tokens, re = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    }

    function decodeBase64(s) {
        var e = {},
            i, b = 0,
            c, x, l = 0,
            a, r = '',
            w = String.fromCharCode,
            L = s.length;
        var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (i = 0; i < 64; i++) {
            e[A.charAt(i)] = i;
        }
        for (x = 0; x < L; x++) {
            c = e[s.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
            }
        }
        return r;
    }

    function isValidId(id) {
        return (
            id && (
                (id.length == 15 && /[a-zA-Z0-9]{15}/.test(id)) ||
                (id.length == 18 && /[a-zA-Z0-9]{18}/.test(id))
            )
        );
    }

    function convertUrl(link) {
        var objectId;
        if (~link.origin.indexOf("lightning")) {
            var urlParts = link.href.split("/");
            var indexOfSObject = urlParts.indexOf("sObject");
            var indexOfAlohaRedirect = urlParts.indexOf("alohaRedirect");
            if (indexOfSObject > 0) {
                objectId = urlParts[indexOfSObject + 1];
            } else if (indexOfAlohaRedirect > 0) {
                objectId = urlParts[indexOfAlohaRedirect + 1].split("?")[0];
            } else {
                try {
                    var jsonBlob = JSON.parse(decodeBase64(decodeURIComponent(link.hash.substr(1))));
                    if (jsonBlob.attributes.feedElementId != undefined) {
                        objectId = jsonBlob.attributes.feedElementId;
                    }
                } catch (e) {
                    console.debug("failed to parse encoded json for " + link.href);
                }
            }
        } else {
            var query = getQueryParams(document.location.search);
            if (query.id != undefined) {
                objectId = query.id;
            } else if (query.fId != undefined) {
                objectId = query.fId;
            } else if (query.scrumteamid != undefined) {
                objectId = query.scrumteamid;
            } else if (query.g != undefined) {
                objectId = query.g;
            } else if (query.u != undefined) {
                objectId = query.u;
            }
        }

        if (!isValidId(objectId)) {
            return null;
        }

        var mySalesforceUrl = link.origin.replace(".lightning.force.com", ".my.salesforce.com");
        return mySalesforceUrl + "/" + objectId;
    }

    function convertUrlsOnPage() {
        $('a[href]:not([data-original-href])').each(function(index, node) {
            var oldHref = node.href;
            var newHref = convertUrl(node);
            if (newHref) {
                node.href = newHref;
                $(node).attr('data-original-href', oldHref);
            }
        });
    }

    setInterval(convertUrlsOnPage, 5000);
})();
