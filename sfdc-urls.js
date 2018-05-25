SfdcUrls = SFDC_URLS || {
    getQueryParams: function(qs) {
        qs = qs.split("+").join(" ");
        var params = {},
            tokens, re = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    },

    decodeBase64: function(s) {
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
    },

    fisValidId: function(id) {
        return (
            id && (
                (id.length == 15 && /[a-zA-Z0-9]{15}/.test(id)) ||
                (id.length == 18 && /[a-zA-Z0-9]{18}/.test(id))
            )
        );
    },

    fconvertUrl: function(link) {
        var objectId;

        if (~link.origin.indexOf("lightning")) {
            var urlParts = link.href.split("/");
            var indexOfr = urlParts.indexOf("r");
            var indexOfSObject = urlParts.indexOf("sObject");
            var indexOfAlohaRedirect = urlParts.indexOf("alohaRedirect");
            if (indexOfr > 0) {
                objectId = urlParts[indexOfr + 1];
            } else if (indexOfSObject > 0) {
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
};
