// ==UserScript==
// @name         SFDC Pretty URLs
// @namespace    github.com/msmeeks/pretty-urls-in-salesforce
// @version      0.2
// @description  Convert SFDC URLs to their short form in the Lightning Experience
// @author       msmeeks
// @match        https://*.lightning.force.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @require      https://raw.githubusercontent.com/msmeeks/pretty-urls-in-salesforce/master/sfdc-urls.js
// @grant        none
// ==/UserScript==

(function() {
    function convertUrlsOnPage() {
        $('a[href]:not([data-original-href])').each(function(index, node) {
            var oldHref = node.href;
            var newHref = SfdcUrls.convertUrl(node);
            if (newHref) {
                node.href = newHref;
                $(node).attr('data-original-href', oldHref);
            }
        });
    }

    setInterval(convertUrlsOnPage, 5000);
})();
